import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ActaAplicacionService } from '../acta-aplicacion.service';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-lista-acta-aplicacion',
  templateUrl: './lista-acta-aplicacion.component.html',
  styleUrls: ['./lista-acta-aplicacion.component.scss'],
})
export class ListaActaAplicacionComponent implements OnInit {
  @ViewChild('modalDetail') modalDetail: any;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  openClose(){
    if (this.matPanel == false){
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }    
  }


  loading = false;
  listaActas: any = [];

  filters: any = {
    patient: '',
    date: '',
    state: '',
  };

  pagination = {
    pageSize: 15,
    page: 1,
    collectionSize: 0,
  };

  constructor(
    private _user: UserService,
    private _acta: ActaAplicacionService
  ) {}

  ngOnInit(): void {
    // this.getCetificates(false);
    this.filtersCertificates();
  }

  filtersCertificates(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filters,
    };
    this.loading = true;
    this._acta.getActas(params).subscribe((r: any) => {
      this.listaActas = r.data.data;
      this.pagination.collectionSize = r.data.total;
      this.loading = false;
    });
  }

  getCetificates(evet) {
    this._acta.getActas().subscribe((data: any) => {
      this.listaActas = data.data.data;
      console.table(this.listaActas);
    });
  }

  cancelCertificates(id) {
    Swal.fire({
      title: '¿Seguro?',
      text: 'Va a anular esta acta',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Si, Hazlo!',
    }).then((result) => {
      if (result.value) {
        this._acta
          .setCertificates({ id, data: { state: 'Anulada' } })
          .subscribe((r: any) => {
            if (r.code == 200) {
              Swal.fire({
                title: 'Opersación exitosa',
                text: 'Se ha cancelado el acta',
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
              });
              this.getCetificates(false);
            } else {
              Swal.fire({
                title: 'Operación denegada',
                text: r.err,
                icon: 'error',
                allowOutsideClick: false,
                allowEscapeKey: false,
              });
            }
          });
      }
    });
  }

  detailCertificates(){
    this.modalDetail.show()
  }

  close(){}
}
