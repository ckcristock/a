import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from 'saturn-datepicker';
import { DataDinamicService } from '../../../data-dinamic.service';
import { ReportesService } from './reportes.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
})
export class ReportesComponent implements OnInit {
  companies: Array<any>;
  specialities: Array<any>;
  typeRegimens: Array<any>;
  epss: Array<any>;
  datePipe = new DatePipe('es-CO');
  fromNGDate: NgbDate;
  toNGDate: NgbDate;
  hoveredDate: NgbDate;
  date: { year: number; month: number };
  selected: any;
  hidden: boolean = true;
  loading = false;
  fromDate: Date;
  toDate: Date;
  /* @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   */
  typeReportDefault = 'Reporte de atenciones';
  identifier: any;
  typeReports = [
    'Reporte de atenciones',
    'Reporte de agendas',
    'Reporte de estado de agendas',
    'Reporte de lista de espera',
  ];
  show_input: boolean = false;
  constructor(
    private _dataDinamic: DataDinamicService,
    private _reportes: ReportesService,
    private dateAdapter: DateAdapter<any>
  ) {
    this.dateAdapter.setLocale('es');
    this.getCompanies();
    this.getSpecialities();
    this.getRegimens();
    this.getEpss();
    this.gettypeReportes();
  }

  ngOnInit(): void {}

  getCompanies() {
    this._dataDinamic.getCompanies().subscribe((r: any) => {
      this.companies = r.data;
      this.companies.unshift({ text: 'Todas', value: '' });
    });
  }

  gettypeReportes() {
    this._dataDinamic.gettypeReportes().subscribe((r: any) => {
      if (r.length != 0) {
        this.typeReports = r;
      }
      console.log(this.typeReports);
    });
  }

  getSpecialities() {
    this._dataDinamic.getSpecialties('', '').subscribe((r: any) => {
      this.specialities = r.data;
      this.specialities.unshift({ text: 'Todas', value: '' });
    });
  }

  getRegimens() {
    this._dataDinamic.getRegimens().subscribe((req: any) => {
      this.typeRegimens = req.data;
      this.typeRegimens.unshift({ text: 'Todos', value: '' });
    });
  }
  getEpss() {
    this._dataDinamic.getEps().subscribe((req: any) => {
      this.epss = req.data;
      console.log(req)
      this.epss.unshift({ text: 'Todas', value: '' });
    });
  }

  showInput() {
    let currentTypeReport = this.typeReports.find((type) => {
      return type['text'] == this.typeReportDefault;
    });
    this.show_input = Boolean(currentTypeReport['show_input']);
  }

  download(form: NgForm) {
    this.loading = true;
    console.log(form.value);
    this._reportes.download(form.value).subscribe((response: BlobPart) => {
      let blob = new Blob([response], { type: 'application/xlsx' });
      var filename = 'Reporte' + new Date();
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);

      link.download = `${filename}.xlsx`;
      link.click();
      this.loading = false;
    }),
      (error) => {
        console.log('Error downloading the file');
        this.loading = false;
      },
      () => {
        console.info('File downloaded successfully');
        this.loading = false;
      };
  }

  /* Date */

  /**
   * @param date date obj
   */
  isInside(date: NgbDate) {
    return date.after(this.fromNGDate) && date.before(this.toNGDate);
  }

  /**
   * @param date date obj
   */
  isRange(date: NgbDate) {
    return (
      date.equals(this.fromNGDate) ||
      date.equals(this.toNGDate) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  /**
   * Is hovered over date
   * @param date date obj
   */
  isHovered(date: NgbDate) {
    return (
      this.fromNGDate &&
      !this.toNGDate &&
      this.hoveredDate &&
      date.after(this.fromNGDate) &&
      date.before(this.hoveredDate)
    );
  }

  /**
   * on date selected
   * @param date date object
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    } else if (this.fromDate && !this.toDate && !date.before(this.fromNGDate)) {
      this.toNGDate = date;
      this.toDate = new Date(date.year, date.month - 1, date.day);
      this.hidden = true;
      this.selected =
        this.fromDate.toLocaleDateString() +
        '-' +
        this.toDate.toLocaleDateString();

      this.fromDate = null;
      this.toDate = null;
      this.fromNGDate = null;
      this.toNGDate = null;
    } else {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    }
  }
  selectedDate(fecha) {
    //console.log(fecha);
    this.selected =
      this.datePipe.transform(fecha.value.begin._d, 'dd-MM-yyyy') +
      '-' +
      this.datePipe.transform(fecha.value.end._d, 'dd-MM-yyyy');
   // console.log(this.selected);
  }
}
