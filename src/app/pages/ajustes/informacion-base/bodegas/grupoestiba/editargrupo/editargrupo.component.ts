import { Component, OnInit, Input, EventEmitter, ViewChild, Output } from '@angular/core';
import swal,{SweetAlertOptions} from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editargrupo',
  templateUrl: './editargrupo.component.html',
  styleUrls: ['./editargrupo.component.scss']
})
export class EditargrupoComponent implements OnInit {

  @Output('actualizarGrupos') actualizarGrupos = new EventEmitter<any>();
  @Input('abrirModalGrupo') abrirModalGrupo:EventEmitter<any>;
  @ViewChild('modalActualizarGrupo') modalActualizarGrupo:any;
  @ViewChild('alert') alert:any;
  
  public alertOption:SweetAlertOptions;
  public tipo = '';
  public grupo :any ={
    Nombre:'',
    Fecha_Vencimiento:'',
    Presentacion:''
  }

  constructor( private http:HttpClient) {
    
    this.alertOption = {
      title: "¿Está Seguro?",
      text: "Se dispone a "+this.tipo+ "el precio del producto",
      showCancelButton: true,
      cancelButtonText: "No, Dejame Comprobar!",
      confirmButtonText: "Si, Guardar",
      showLoaderOnConfirm: true,
      focusCancel: true,
      icon: "question",
  
      preConfirm: () => {
        return new Promise((data) => {
            this.guardar();
        });
      },
      allowOutsideClick: () => !swal.isLoading(),
      };
      
   }

  ngOnInit() {
    this.abrirModalGrupo.subscribe(event=>{
      if (event.Grupo && event.Tipo=='Editar') {
        this.grupo = Object.assign({}, event.Grupo) ;
        console.log(event);
        this.alertOption.text='';

      }else{
        this.grupo={
          Nombre:'',
          Fecha_Vencimiento:'',
          Presentacion:'',
          Id_Bodega_Nuevo:event.Grupo.Id_Bodega_Nuevo
        };
      }
      this.tipo = event.Tipo;
      this.modalActualizarGrupo.show();
    })

  }

  cerrarModal(){
    this.modalActualizarGrupo.hide();
  }

  guardar(){
  
    const data = new FormData();
    data.append('Grupo',JSON.stringify(this.grupo));
    data.append('Tipo',this.tipo);
    this.http.post(environment.ruta+ 'php/grupo_estiba/set_grupo_estiba.php',data)
      .subscribe((ok:any)=>{
         this.actualizarGrupos.emit(true);
         this.modalActualizarGrupo.hide();
         this.alert.icon = ok.type;
         this.alert.title = ok.title;
         this.alert.text = ok.message;
         this.alert.fire();
      },err=>{
        console.log(err);
        
        this.alert.icon = 'error';
        this.alert.title = 'Ocurrió un error';
        this.alert.text = err.error.text;
        this.alert.fire();
      })

  }

  OnDestroy(){
    this.abrirModalGrupo.unsubscribe();
  }
}
