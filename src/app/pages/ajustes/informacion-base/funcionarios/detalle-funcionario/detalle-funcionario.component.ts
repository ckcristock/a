import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetalleService } from './detalle.service';
import { DatosBasicosService } from './ver-funcionario/datos-basicos/datos-basicos.service';

@Component({
  selector: 'app-detalle-funcionario',
  templateUrl: './detalle-funcionario.component.html',
  styleUrls: ['./detalle-funcionario.component.scss']
})
export class DetalleFuncionarioComponent implements OnInit {
  habilitado = true;
  components = 'informacion';
  id: any;
  private subscriptions = new Subscription();
  funcionario: any = {
    salary: '',
    work_contract: '',
    first_name: '',
    first_surname: '',
    image: '',
    second_name: '',
    second_surname: '',
    signature: '',
    title: ''
  };
  constructor(
    private detalleService: DetalleService,
    private activateRoute: ActivatedRoute,
    private basicDataService: DatosBasicosService,
    private location: Location
  ) { }



  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    this.getBasicData();
    this.subscriptions.add(this.basicDataService.datos$.subscribe(data => { this.getBasicData(); }));

  }

  regresar(): void {
    this.location.back();
  }

  verComponent(componente: string) {
    this.components = componente;
  }

  getBasicData() {
    this.detalleService.getBasicDataCustom(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.funcionario = res.data;
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
