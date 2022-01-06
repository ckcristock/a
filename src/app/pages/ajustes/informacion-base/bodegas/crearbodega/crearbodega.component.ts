import { Component, EventEmitter, OnInit, Input, ViewChild, ElementRef, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-crearbodega',
  templateUrl: './crearbodega.component.html',
  styleUrls: ['./crearbodega.component.scss']
})
export class CrearbodegaComponent implements OnInit {
  @Input('abrirCrear') abrirCrear : EventEmitter<any>;
  @Output('CargarBodegas') cargarBodegas = new EventEmitter<any>();
  @ViewChild('modalBodega') modalBodega ;
  @ViewChild('Mapa') Mapa:ElementRef ;
  @ViewChild('infoSwal') infoSwal:SwalComponent ;

  public bodega:any = {
    Nombre:'',
    Direccion:'',
    Telefono:'',
    Mapa:'',
    Compra_Internacional:'',
    Tipo: '',
    company_id:'',
  }


  public tipo = '';
  public companies :any[]= [];

  constructor(private http:HttpClient, private _company: CompanyService,) { }

  ngOnInit() {
    this.getCompanies()
    this.abrirCrear.subscribe(event=>{
      this.tipo=event.Tipo;
      if(event.Bodega){
        this.bodega=event.Bodega;
        this.bodega.company_id =  parseInt( this.bodega.company_id) 
      }else{
        this.setBodega();
      }
      this.modalBodega.show();
    })
  }
   getCompanies() {
     this._company
      .getCompanies({ owner: 1 })
      .subscribe((d: any) => {
        this.companies = d.data;
        d.data[0] ? (this.bodega.company_id = d.data[0].value) : '';
      });
  }
  guardarBodega(){

    console.log(this.infoSwal.fire());
   
    let data = new FormData();
    let mapa ;
    if (this.Mapa.nativeElement.files.length === 1) {
      mapa = this.Mapa.nativeElement.files[0];
      data.append('mapa',mapa);

    }else if(this.tipo == 'Crear'){

      this.infoSwal.icon='warning';
      this.infoSwal.title = "Falta el archivo";
      this.infoSwal.text = 'La imágen del mapa es obligatoria';

  
      
      this.infoSwal.fire();
      this.infoSwal;
      return ''
    }


    data.append('bodega',JSON.stringify( this.bodega) );
    data.append('tipo',this.tipo);

    this.http.post(environment.ruta+'php/bodega_nuevo/crear_bodega_nuevo.php',data).subscribe(ok=>{
        this.infoSwal.icon='success';
        this.infoSwal.title = "Operación realizada satisfactoriamente";
        this.infoSwal.text = ok['message'];
        this.infoSwal.fire();
        this.modalBodega.hide();

        this.cargarBodegas.emit(true);


      },err=>{
        this.infoSwal.icon='error';
        this.infoSwal.title = "Ha ocurrido un error";
        this.infoSwal.text = err.error.message;
        this.infoSwal.fire();

      });


  }

  setBodega(){
    this.bodega = {
      Nombre:'',
      Direccion:'',
      Telefono:'',
      Mapa:'',
      Compra_Internacional:''
    }
  }


}
