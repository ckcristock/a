import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { EpssService } from '../../services/epss.service';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.scss']
})
export class ListContractsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  contracts: any[] = [];
  loading: boolean = false;
  filtros: any = {
    name: '',
    code: ''
  }

  pagination: any = {
    page: 1,
    pageSize: 10,
    collectionSize: 0
  }


  constructor(
    private epsContractService: EpssService,
    private router: Router,
    private _swal: SwalService,
  ) { }

  ngOnInit(): void {
    this.getAllContratos();
  }

  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }

  getAllContratos(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }

    this.loading = true;
    this.epsContractService.getAllPaginateEpsContact(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.contracts = res.data.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  anularOActivar(zone, status, state) {

    let data: any = {
      id: zone.id,
      status,
      state
    }
    this._swal.show({
      icon: 'question',
      title: '¿Estás seguro(a)?',
      showCancel: true,
      text: (status === 0 ? '¡El contrato se anulará!' : '¡El contrato se activará!'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.epsContractService.createNewEpsContact(data)
          .subscribe(res => {
            this.getAllContratos();
            this._swal.show({
              title: (status === 0 ? '¡Contrato anulado!' : '¡Contrato activado!'),
              text: 'Operación completada con éxito.',
              icon: 'success',
              showCancel: false,
              timer: 1000
            })
          })
      }
    })

    //
    //     
    //   }
    // })
  }
}
