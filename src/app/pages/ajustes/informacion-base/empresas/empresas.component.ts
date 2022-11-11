import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ConfiguracionEmpresaService } from '../../configuracion/configuracion-empresa/configuracion-empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  matPanel = false;
  pagination: any = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  };
  filtro: any = {
    name: '',
    tin: '',
  };
  loading: boolean = false
  enterprises: any[] = [];
  constructor(private _company: ConfiguracionEmpresaService) {}

  ngOnInit(): void {
    this.getCompany();
  }
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll();
      this.matPanel = true;
    } else {
      this.accordion.closeAll();
      this.matPanel = false;
    }
  }
  getCompany(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination,
      ...this.filtro,
    };
    this.loading = true
    this._company.getCompanies(params).subscribe((res: any) => {
      this.enterprises = res.data.data;
      this.loading = false
      this.pagination.collectionSize = res.data.total;
    });
  }
}
