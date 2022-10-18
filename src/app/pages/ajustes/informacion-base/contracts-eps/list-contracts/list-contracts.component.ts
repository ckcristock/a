import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { EpssService } from '../../services/epss.service';

@Component({
  selector: 'app-list-contracts',
  templateUrl: './list-contracts.component.html',
  styleUrls: ['./list-contracts.component.scss']
})
export class ListContractsComponent implements OnInit {
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
  contracts: any = [];
  contract: any = {};
  filtros: any = {
    name: '',
    code: ''
  }

  pagination = {
    pageSize: 25,
    page: 1,
    collectionSize: 0
  }

  loading: boolean = false;
  constructor(

    private epsContractService: EpssService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getAllCups();
  }

  // openModal = () => {
  //   this.modal.openModal();
  // }

  edit = (id) => {
    this.router.navigateByUrl(`/ajustes/informacion-base/create-contract/${id}`);
  }

  getAllCups(page = 1) {

    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }

    this.loading = true;
    this.epsContractService.getAllPaginateEpsContact(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.contracts = res.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  anularOActivar(zone, status) {

    let data: any = {
      id: zone.id,
      status
    }


    // Swal.fire({
    //   title: '¿Estas seguro?',
    //   text: (status === 'Inactivo' ? 'La Cup se Inactivará!' : 'La Cup se activará'),
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   cancelButtonText: 'Cancelar',
    //   confirmButtonText: (status === 'Inactivo' ? 'Si, Inhabilitar' : 'Si, activar')
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.epsContractService.createNewCup(data)
    //       .subscribe(res => {
    //         this.getAllCups();
    //         Swal.fire({
    //           title: (status === 'Inactivo' ? 'Cup Inhabilitada!' : 'Cup activada'),
    //           text: (status === 'Inactivo' ? 'La Cup ha sido Inhabilitada con éxito.' : 'La Cup ha sido activada con éxito.'),
    //           icon: 'success'
    //         })
    //       })
    //   }
    // })
  }


  registerNull(cup) {
    // this.cup = cup;

  }

  getCups(cup) {
    // this.cup = { ...cup };
  }


}
