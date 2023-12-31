import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { DependenciesService } from '../../ajustes/informacion-base/services/dependencies.service';
import { GroupService } from '../../ajustes/informacion-base/services/group.service';
import { PositionService } from '../../ajustes/informacion-base/services/positions.service';
import { ContratosService } from './contratos.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  searchEmpresa: any;
  searchGrupo: any;
  searchDependencia: any;
  searchCargo: any;
  matPanel = false;
  openClose() {
    if (this.matPanel == false) {
      this.accordion.openAll()
      this.matPanel = true;
    } else {
      this.accordion.closeAll()
      this.matPanel = false;
    }
  }

  contractData: boolean = false;
  contracts: any[] = [];
  groups: any[];
  loading = false;
  contractsTrialPeriod: any = [];
  contractsToExpire: any = [];
  dependencies: any[];
  positions: any[];
  companies: any[] = [];
  pagination: any = {
    pageSize: 12,
    page: 1,
    collectionSize: 0
  }
  paginationCV: any = {
    pageSize: 2,
    page: 1,
    collectionSize: 0
  }
  filtros: any = {
    company: '',
    person: '',
    dependency: '',
    position: '',
    group: ''
  }
  constructor(
    private contractService: ContratosService,
    private _group: GroupService,
    private _positions: PositionService,
    private _dependecies: DependenciesService
  ) { }

  ngOnInit(): void {
    this.getGroups();
    this.getDependencies();
    this.getPositions();
    this.getCompanies();
    this.getContractsToExpire();
    this.getContractByTrialPeriod();
    this.getAllContracts();
  }

  getAllContracts(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }
    this.loading = true;
    this.contractService.getAllContracts(params)
      .subscribe((res: any) => {
        this.contracts = res.data.data;
        this.pagination.collectionSize = res.data.total;
        this.loading = false;
      });
  }

  getCompanies() {
    this.contractService.getCompaniesOwners()
      .subscribe((res: any) => {
        this.companies = res.data;
      });
  }

  getGroups() {
    this._group.getGroup().subscribe((r: any) => {
      this.groups = r.data
      this.groups.unshift({ text: 'Seleccione uno', value: '' });
    })
  }

  getDependencies() {
    this.contractService.getDependencies().subscribe((d: any) => {
      this.dependencies = d.data;
      this.dependencies.unshift({ text: 'Seleccione una', value: '' });
    });
  }

  getPositions() {
    this.contractService.getPositions().subscribe((d: any) => {
      this.positions = d.data;
      this.positions.unshift({ text: 'Seleccione una', value: '' });
    });
  }

  getContractsToExpire(page = 1) {
    this.paginationCV.page = page;
    this.contractService.getContractsToExpire(this.paginationCV)
      .subscribe((res: any) => {
        this.contractsToExpire = res.data.data;
        this.paginationCV.collectionSize = res.data.total;
      });
  }

  getContractByTrialPeriod() {
    this.contractService.getContractByTrialPeriod()
      .subscribe((res: any) => {
        this.contractsTrialPeriod = res.data;
      })
  }

}
