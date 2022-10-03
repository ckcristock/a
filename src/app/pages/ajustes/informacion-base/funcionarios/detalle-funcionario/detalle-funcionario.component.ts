import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DetalleService } from './detalle.service';
import { DatosBasicosService } from './ver-funcionario/datos-basicos/datos-basicos.service';
import { SwalService } from '../../services/swal.service';
import { environment } from 'src/environments/environment';

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

  public ajaxSettings: object;
  public view: string;
  //public ruta = 'https://backend.ateneoerp.com/';
  public ruta = environment.url_assets
  public url = ''

  constructor(
    private detalleService: DetalleService,
    private activateRoute: ActivatedRoute,
    private basicDataService: DatosBasicosService,
    private location: Location,
    private _swal: SwalService,
  ) { }



  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;    
    this.getBasicData();
    this.subscriptions.add(this.basicDataService.datos$.subscribe(data => { this.getBasicData(); }));

  }


  liquidar(status){
    let data = {
      status
    }
    this._swal.show({
      icon: 'question',
      title: '¿Estas Seguro?',
      text: 'Se dispone a preliquidar el empleado'
    }).then((result) => {
      if (result.isConfirmed) {
        this.detalleService.liquidar(data, this.id).subscribe((r:any) => {
          this._swal.show({
            icon: 'success',
            title: 'Proceso Satisfactorio',
            text: 'El Funcionario ha sido preliquidado con éxito.',
            showCancel: false
          });
        });
      }
    });
  }



  regresar(): void {
    this.location.back();
  }

  verComponent(componente: string) {
    console.log(componente);
    this.components = componente;
  }

  getBasicData() {
    this.detalleService.getBasicDataCustom(this.id)
      .subscribe((res: any) => {
        console.log(res);
        this.funcionario = res.data;
        this.url = this.ruta + '/filemanager4/filemanager/dialog.php?type=0&car=rrhh%2Ffuncionarios%2F' + this.funcionario.identifier 
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
