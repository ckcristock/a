import { Component, OnInit, ViewChild } from '@angular/core';

import { donutChart } from './data';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';
import { LateArrivalsService } from './late-arrivals.service';
import { CompanyService } from '../../ajustes/informacion-base/services/company.service';
import { GroupService } from '../../ajustes/informacion-base/services/group.service';
import { DependenciesService } from '../../ajustes/informacion-base/services/dependencies.service';
import { PersonService } from '../../ajustes/informacion-base/persons/person.service';
import { MatAccordion, PageEvent } from '@angular/material';
import { DatePipe, Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Permissions } from 'src/app/core/interfaces/permissions-interface';
import { PermissionService } from 'src/app/core/services/permission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { UserService } from '../../../core/services/user.service';
import { User } from 'src/app/core/models/users.model';
@Component({
  selector: 'app-llegadas-tardes',
  templateUrl: './llegadas-tardes.component.html',
  styleUrls: ['./llegadas-tardes.component.scss'],
})
export class LlegadasTardesComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  datePipe = new DatePipe('es-CO');

  donutChart = donutChart;
  group_id: any;
  people_id: any;
  dependency_id: any;
  donwloading = false;

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Llegadas tardes' },
  ];
  public lineChartLabels: Label[] = [];
  options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            precision: 0,
            stepSize: 1,
          },
        },
      ],
    },
    legend: { display: true, labels: { fontColor: 'black' } },
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  company_id: any;
  cargando = true;
  companies: any = [];
  companyList: any = [];

  groupList: any[] = [];
  dependencyList: any[] = [];

  dataDiary = {
    percentage: 0,
    allByDependency: [],
    total: 0,
    time_diff_total: '0',
  };
  firstDay: any;
  lastDay: any;
  people: any[];

  loading: boolean;
  matPanel: boolean;
  date: any;
  formFilters: FormGroup;
  orderObj: any
  active_filters: boolean = false
  permission: Permissions = {
    menu: 'Llegadas tarde',
    permissions: {
      show: true,
      add: true
    }
  };
  paginationMaterial: any;
  pagination: any = {
    page: '',
    pageSize: '',
  }
  public user : User;

  constructor(
    private _lateArrivals: LateArrivalsService,
    private _companies: CompanyService,
    private _grups: GroupService,
    private _dependencies: DependenciesService,
    private _people: PersonService,
    private fb: FormBuilder,
    private _permission: PermissionService,
    private location: Location,
    public router: Router,
    public route: ActivatedRoute,
    public _user: UserService
  ) {
    this.user = _user.user;
    this.getGroup();
    this.getPeople();
    this.getCompanies();
    this.permission = this._permission.validatePermissions(this.permission);
  }

  ngOnInit() {
    if(this.permission.permissions.show) {
      this.createFormFilters();

      this.route.queryParamMap.subscribe((params: any)=>{
        if (params.params.pageSize) {
          this.pagination.pageSize = params.params.pageSize
        } else {
          this.pagination.pageSize = 10
        }
        if (params.params.pag) {
          this.pagination.page = params.params.pag
        } else {
          this.pagination.page = 1
        }
        this.orderObj = { ...params.keys, ...params }

        if (Object.keys(this.orderObj).length > 4) {
          this.active_filters = true
          const formValues = {};
          for (const param in params) {
            formValues[param] = params[param];
          }
          this.formFilters.patchValue(formValues['params']);
        }
        let fecha = new Date();
        let hoy = fecha.toISOString().split('T')[0];
        this.lastDay = hoy;
        this.firstDay = new Date(fecha.setDate(fecha.getDate() - 2))
          .toISOString()
          .split('T')[0];
        this.getLateArrivals();
        this.getLinearDataset();
        this.getStatisticsByDays();
      })
    } else {
      this.router.navigate(['/notautorized']);
    }
    console.log('formfilter', this.formFilters);
  }

  openClose() {
    this.matPanel = !this.matPanel;
    this.matPanel ? this.accordion.openAll() : this.accordion.closeAll();
  }

  handlePageEvent(event: PageEvent) {
    this.pagination.pageSize = event.pageSize
    this.pagination.page = event.pageIndex + 1
    this.getLateArrivals()
  }

  resetFiltros() {
    for (const controlName in this.formFilters.controls) {
      this.formFilters.get(controlName).setValue('');
    }
    this.active_filters = false
  }

  SetFiltros(paginacion) {
    let params = new HttpParams;
    params = params.set('pag', paginacion)
    params = params.set('pageSize', this.pagination.pageSize)
    for (const controlName in this.formFilters.controls) {
      const control = this.formFilters.get(controlName);
      if (control.value) {
        params = params.set(controlName, control.value);
      }
    }
    return params;
  }

  createFormFilters() {
    this.formFilters = this.fb.group({
      company_id: [0],
      group_id: [0],
      dependency_id: [0],
      people_id: [0],
      date_from: [''],
      date_to: [''],
      date: [{begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25)}]
    })
    this.formFilters.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(r => {
      this.getLateArrivals();
    })
  }
  /////////////////////////////////

  selectedDate(fecha) {
    if (fecha.value) {
      this.formFilters.patchValue({
        date_from: this.datePipe.transform(fecha.value.begin._d, 'yyyy-MM-dd'),
        date_to: this.datePipe.transform(fecha.value.end._d, 'yyyy-MM-dd')
      })
    } else {
      this.formFilters.patchValue({
        date_from: '',
        date_to: ''
      });
    }
  }

  getLateArrivals() {
    this.loading = true;
    let params = {
      ...this.pagination,
      ...this.formFilters.value
    }
    var paramsurl = this.SetFiltros(this.pagination.page);
    this.location.replaceState('/rrhh/llegadas-tarde', paramsurl.toString());
    const fecha_ini = this.formFilters.controls.date_from.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_from.value
    const fecha_fin = this.formFilters.controls.date_to.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_to.value
    this._lateArrivals
      .getLateArrivals(fecha_ini, fecha_fin, params)
      .subscribe((res: any) => {
        this.companies = res.data;
        this.loading = false;
        this.paginationMaterial = res.data
        if (this.paginationMaterial.last_page < this.pagination.page) {
          this.paginationMaterial.current_page = 1
          this.pagination.page = 1
          this.getLateArrivals()
        }
        this.transformData();
      });
  }

  downloadLateArrivals() {
    let params = this.SetFiltros(this.pagination.page);
    this.donwloading = true;
    const fecha_ini = this.formFilters.controls.date_from.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_from.value
    const fecha_fin = this.formFilters.controls.date_to.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_to.value
    this._lateArrivals
      .downloadLateArrivals(fecha_ini, fecha_fin, params)
      .subscribe((response: BlobPart) => {
        let blob = new Blob([response], { type: 'application/excel' });
        let link = document.createElement('a');
        const filename = 'reporte_llegadas_tarde';
        link.href = window.URL.createObjectURL(blob);
        link.download = `${filename}.xlsx`;
        link.click();
        this.donwloading = false;
      }),
      (error) => {
        console.log('Error downloading the file', error);
        this.donwloading = false;
      },
      () => {
        console.info('File downloaded successfully');
        this.donwloading = false;
      };
  }

  getPeople() {
    this._people.getAll({ type: '2' }).subscribe((res: any) => {
      this.people = res.data;
      this.people.unshift({ text: 'Todos', value: '' });
    });
  }
  getCompanies() {
    //no necesito consultar las companies porque se encuentran en el servicio de user,
    //solo las formateo para que puedan ser mostradas en el select
    this.companyList = this.user.person.companies.map((ele)=>({ value: ele.id, text: ele.short_name }))
  }

  getGroup() {
    this._grups.getGroup().subscribe((r: any) => {
      this.groupList = r.data;
      this.groupList.unshift({ value: 0, text: 'Todos' });
      this.group_id = 0;
      this.getDependencies(0);
    });
  }
  getDependencies(group_id) {
    this._dependencies.getDependencies({ group_id }).subscribe((r: any) => {
      this.dependencyList = r.data;
      this.dependencyList.unshift({ value: 0, text: 'Todas' });
      this.dependency_id = 0;
    });
  }

  getLinearDataset() {
    let params = this.SetFiltros(this.pagination.page);
    let fecha_inicio = moment().subtract(15, 'days').format('YYYY-MM-DD');
    let fecha_final = moment().format('YYYY-MM-DD');
    this._lateArrivals
      .getStatistcs(fecha_inicio, fecha_final, params)
      .subscribe((r: any) => {
        this.getLast15Days(r.data.lates);
      });
  }

 /*  getParams() {
    let params: any = {};
    this.company_id != '0' && this.company_id
      ? (params.company_id = this.company_id)
      : '';

    this.group_id && this.group_id != '0'
    : '';
      ? (params.group_id = this.group_id)

    this.dependency_id != '0' && this.dependency_id
      ? (params.dependency_id = this.dependency_id)
      : '';
    this.people_id != '0' && this.people_id
      ? (params.person_id = this.people_id)
      : '';

    return params;
  } */

  getLast15Days(lates: any[]) {
    this.lineChartData = [{ data: [], label: 'Llegadas tardes' }];
    this.lineChartLabels = [];
    for (let i = 0; i < 15; i++) {
      let day = moment().subtract(i, 'days').format('DD');
      let dayFinded = lates.find((l) => l.day == day);
      let data = dayFinded ? dayFinded.total : 0;
      this.lineChartData[0].data.unshift(data);
      this.lineChartLabels.unshift(day);
    }
  }
  getStatisticsByDays() {
    let params: any = this.SetFiltros(this.pagination.page);
    params.type = 'diary';
    const fecha_ini = this.formFilters.controls.date_from.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_from.value
    const fecha_fin = this.formFilters.controls.date_to.value == ''
                        ? moment().format('YYYY-MM-DD')
                        : this.formFilters.controls.date_to.value

    this._lateArrivals
      .getStatistcs(fecha_ini, fecha_fin, params)
      .subscribe((r: any) => {
        if (r.data.lates.length>0) {
          this.dataDiary.total = r.data.lates.total;
          if (r.data.lates.time_diff_total != null) {
            this.dataDiary.time_diff_total = r.data.lates.time_diff_total;
          }
          this.dataDiary.percentage = r.data.percentage;
          //let d = r.data?.allByDependency.reduce(
          let d = r.data.lates.reduce(
            (acc, el) => {
              return {
                labels: [...acc.labels, el.day],
                datasets: [...acc.datasets, el.total],
              };
            },
            { labels: [], datasets: [] }
          );

          this.donutChart.datasets[0].data = d.datasets;
          this.donutChart.labels = d.labels;
        }
      });
  }

  transformData() {
    this.companies.forEach((c) => {
      c.groups.forEach((g) => {
        if(!Array.isArray(g.dependencies)){
          g.dependencies = Object.values(g.dependencies)
        }
        g.dependencies.forEach((d) => {
          d.people.forEach((pr) => {
            pr.averageTime = this.tiempoTotal(pr.late_arrivals);
          });
        });
      });
    });
  }

  tiempoEnMilisegundos(horaUno, horaDos) {
    let horaInicial = moment.utc(horaUno, 'HH:mm:ss');
    let horaFinal = moment.utc(horaDos, 'HH:mm:ss');
    if (horaFinal.isBefore(horaInicial)) {
      horaFinal.add(1, 'd');
    }

    let duracion = moment.duration(horaFinal.diff(horaInicial));
    return duracion.as('milliseconds');
  }

  tiempoTotal(llegadasTarde = []) {
    let total = llegadasTarde.length;
    let suma = 0;
    let promedio = 0;

    llegadasTarde.forEach((llegada) => {
      suma += this.tiempoEnMilisegundos(llegada.entry, llegada.real_entry);
    });
    //promedio = suma / total;
    promedio = suma;
    return moment.utc(promedio).format('HH:mm:ss');
  }
}
