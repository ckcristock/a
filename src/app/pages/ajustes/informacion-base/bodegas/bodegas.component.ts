import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.scss'],
})
export class BodegasComponent  {
  //paginación
  current_page = 1;
  limit = 10;
  totalItems = '';

  @ViewChild('modalBodega') modalBodega: any;
  @ViewChild('deleteSwal') deleteSwal: any;
  public abrirCrear = new EventEmitter<any>();
  public loading = false;
  public filtros = {
    Nombre: '',
    Direccion: '',
    Telefono: '',
    Compra_Internacional: '',
    Tipo: '',
  };

  public bodegas: any = [
    {
      Id_Bodega_Nuevo: '',
      Nombre: '',
      Direccion: '',
      Telefono: '',
      Mapa: '',
      Compra_Internacional: '',
    },
  ];

  constructor(private http: HttpClient) {
    this.getBodegas();
  }

  getBodegas(pagination = false) {
    if (!pagination) {
      this.current_page = 1;
    }
    this.loading = true;
    let current_page = this.current_page.toString();
    let filtros = JSON.stringify(this.filtros);
    let params = { current_page, filtros };

    this.http
      .get(environment.ruta + 'php/bodega_nuevo/get_bodegas_paginadas.php', {
        params,
      })
      .subscribe((res: any) => {
        this.bodegas = res.data;
        this.totalItems = res.total;
        this.loading = false;
      });
  }

  eliminarBodega(id) {
    let data = new FormData();
    data.append('id', id);

    this.http
      .post(environment.ruta + 'php/bodega_nuevo/eliminar_bodega.php', data)
      .subscribe(
        (res: any) => {
          this.deleteSwal.type = res['type'];
          this.deleteSwal.title = res['title'];
          this.deleteSwal.text = res['message'];
          this.deleteSwal.show();
          this.getBodegas();
        },
        (err) => {
          this.deleteSwal.type = err.error.type;
          this.deleteSwal.title = err.error.title;
          this.deleteSwal.text = err.error.message;
          this.deleteSwal.show();
        }
      );
  }
}
