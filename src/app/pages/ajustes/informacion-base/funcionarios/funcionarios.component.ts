import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonService } from '../professionals/profesionales.service';
import { Person } from 'src/app/core/models/person.model';
import { DependenciesService } from '../services/dependencies.service';
import { CompanyService } from '../services/company.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  };
  loading: boolean;
  breadCrumbItems: Array<{}>;
  people: Person[] = [];

  status: any[] = [
    { id: 1, name: 'Activo', selected: true, color: 'text-success' },
    { id: 2, name: 'Inactivo', selected: true, color: 'text-danger' },
    { id: 3, name: 'Liquidado', selected: true, color: 'text-secondary' },
    { id: 4, name: 'PreLiquidado', selected: true, color: 'text-warning' },
  ];

  public dependencies: any = [];

  public companies: any[] = [];
  isCollapsed: boolean;
  collapsed: boolean;
  collapsed3: boolean;

  // constructor(private _person: PersonService) {
  //   this.getPeople();
  // }

  constructor (
    private _person: PersonService,
    private _dependencies: DependenciesService,
    private _companies: CompanyService
  ) {}

  ngOnInit(): void {
    this.getDependencies();
    this.getCompanies();

    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Product', active: true },
    ];
    this.isCollapsed = false;
    this.collapsed = false;
    this.collapsed3 = false;
  }

  getDependencies() {
    this._dependencies.getDependencies().subscribe((r: any) => {
      this.dependencies = r.data;
      this.dependencies = this.dependencies.map((r) => {
        r.selected = true;
        return r;
      });
      this.getPeople();
    });
  }

  getCompanies() {
    let params = { owner: 1 };
    this._companies.getCompanies(params).subscribe((r: any) => {
      this.companies = r.data;
      this.companies = this.companies.map((r) => {
        r.selected = true;
        return r;
      });
      this.getPeople();
    });
  }

  getPeople(page = 1, name = '') {
    this.pagination.page = page;
    let params: any = { ...this.pagination };
    params.status = this.statusFilter();
    params.dependencies = this.dependenciesFilter();
    params.companies = this.companiesFilter();
    params.name = name ? name : '';

    this.loading = true;
    this._person.getPeople({ data: JSON.stringify(params) }).subscribe((d) => {
      this.people = d['data']['data'];
      this.pagination.collectionSize = d['data']['total'];
      this.loading = false;
    });
  }

  statusFilter() {
    return this.status.reduce(
      (acc: Array<any>, el) =>
        el.selected == true ? acc.concat([el.name]) : acc,
      []
    );
  }
  dependenciesFilter() {
    return this.dependencies.reduce(
      (acc: Array<any>, el) =>
        el.selected == true ? acc.concat([el.value]) : acc,
      []
    );
  }
  companiesFilter() {
    return this.companies.reduce(
      (acc: Array<any>, el) =>
        el.selected == true ? acc.concat([el.value]) : acc,
      []
    );
  }
}
