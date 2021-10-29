import { Component, OnInit, ViewChild, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import swal,{SweetAlertOptions} from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editarestiba',
  templateUrl: './editarestiba.component.html',
  styleUrls: ['./editarestiba.component.scss']
})
export class EditarestibaComponent implements OnInit {
  @ViewChild('alertConfirm') alertConfirm;
  @ViewChild('alert') alert;
  @ViewChild('modalActualizarEstiba') modalActualizarEstiba;
  @Input('abrirModalEstiba') abrirModalEstiba:EventEmitter<any>;
  @Output('actualizarEstibas') actualizarEstibas = new EventEmitter<any>();
  
  public alertOption:SweetAlertOptions;
  public tipo:any;
  public type: any;
  public estiba:any={
    Nombre:'',
    Codigo_Barras:'',
    Estado:'',
    Id_Grupo_Estiba:''
  };


  constructor(private http : HttpClient ) { 
    this.alertOption = {
      title: "¿Está Seguro?",
      text: "Se dispone a actualizar el precio del producto",
      showCancelButton: true,
      cancelButtonText: "No, Dejame Comprobar!",
      confirmButtonText: "Si, Guardar",
      showLoaderOnConfirm: true,
      focusCancel: true,
      icon: "question",
  
      preConfirm: () => {
        return new Promise((data) => {
       
            this.crear();
        
        });
      },
      allowOutsideClick: () => !swal.isLoading(),
      };
      
  }

  ngOnInit() {
    this.abrirModalEstiba.subscribe(event=>{

      if (event.Estiba && event.Tipo=='Editar') {
        this.estiba = Object.assign({}, event.Estiba) ;
      }else{
        this.estiba={
          Nombre:'',
          Codigo_Barras:'',
          Estado:'',
          Id_Grupo_Estiba:event.Estiba.Id_Grupo_Estiba,
          Id_Bodega_Nuevo:event.Estiba.Id_Bodega_Nuevo
        };
      }

      if (event.Estiba.Type == 'Punto') {
        this.estiba.Id_Punto_Dispensacion = event.Estiba.Id_punto
      }
      this.tipo = event.Tipo;
      this.modalActualizarEstiba.show();
    })
  }
  
  actualizar(){
  }

  crear(){
    
    const data = new FormData();
    
    data.append('Estiba',JSON.stringify(this.estiba));
    data.append('Tipo',this.tipo);
    data.append('Type',this.type );

    console.log(this.estiba);

    this.http.post(environment.ruta + 'php/bodega_nuevo/crear_estiba.php',data)
      .subscribe((ok:any)=>{
         this.actualizarEstibas.emit(true);
         this.modalActualizarEstiba.hide();
         this.alert.type = ok.type;
         this.alert.title = ok.title;
         this.alert.text = ok.message;
         this.alert.show();
      },err=>{
        this.alert.type = err.error.type;
        this.alert.title = err.error.title;
        this.alert.text = err.error.message;
        this.alert.show();
      })
  }

  cerrarModal(){
    this.modalActualizarEstiba.hide();
  }

  OnDestroy(){
    this.abrirModalEstiba.unsubscribe();
  }
}
