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
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll();
      this.matPanel = true;
    } else {
      this.accordion.closeAll();
      this.matPanel = false;
    }
  }
  loading: boolean = false
  enterprises: any[] = [];
  constructor(private _company: ConfiguracionEmpresaService) {}

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany() {
    this.loading = true
    this._company.getCompanies().subscribe((res: any) => {
      this.enterprises = res.data;
      this.loading = false
      console.log(this.enterprises)
    });
  }
}
