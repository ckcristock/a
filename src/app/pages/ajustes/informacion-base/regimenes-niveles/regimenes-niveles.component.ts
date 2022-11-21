import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { RegimenesNivelesService } from './regimenes-niveles.service';

@Component({
  selector: 'app-regimenes-niveles',
  templateUrl: './regimenes-niveles.component.html',
  styleUrls: ['./regimenes-niveles.component.scss']
})
export class RegimenesNivelesComponent implements OnInit {

  @ViewChild('accordionRegime') accordionRegime: MatAccordion;
  @ViewChild('accordionLevel') accordionLevel: MatAccordion;
  matPanel: any = {
    accordionRegime: false,
    accordionLevel: false
  };
  dataFormRegime: any;
  dataFormLevel: any;

  openCloseRegime() {
    (!this.matPanel.accordionRegime)?this.accordionRegime.openAll():this.accordionRegime.closeAll();
    this.matPanel.accordionRegime=!this.matPanel.accordionRegime;
  }

  openCloseLevel() {
    (!this.matPanel.accordionLevel)?this.accordionLevel.openAll():this.accordionLevel.closeAll();
    this.matPanel.accordionLevel=!this.matPanel.accordionLevel;
  }
  searching = false;
  searchFailed = false;
  regimes = [];
  levels = [];

  public loadingRegimes = false;
  public loadingLevels = false;
  public filtrosRegimes = {
    name: '',
    code: ''
  }
  public filtrosLevels = {
    name: '',
    code: '',
    cuote: ''
  }
  public pagination: any = {
    regimes: {
      page: 1,
      pageSize: 5,
      collectionSize: 0
    },
    levels: {
      page: 1,
      pageSize: 5,
      collectionSize: 0
    }
  }
  public regimeSelected: any = {
    id: null,
    nombre: ''
  };

  constructor(
    private _regimesLevels: RegimenesNivelesService,
  ) { }

  ngOnInit(): void {
    this.getRegimes();
  }

  getRegimes(page = 1) {
    this.pagination.regimes.page = page;
    let params = {
      ...this.pagination.regimes, ...this.filtrosRegimes
    }
    this.loadingRegimes = true;
    this._regimesLevels.getRegimes(params).subscribe((res: any) => {
      this.regimes = res.data.data;
       this.loadingRegimes = false;
      this.pagination.regimes.collectionSize = res.data.total;
    })
  }

  selected(model, value) {
    model = model.map(m => {
      m.selected = m.id == value ? true : false;
    })
  }

  getLevels(regime, page = 1) {
    this.pagination.levels.page = page;
    let params = {
      ...this.pagination.levels, ...this.filtrosLevels
    }
    this.loadingLevels = true;
    this._regimesLevels.getLevelsRegime(regime, params).subscribe((res: any) => {
      this.levels = res.data.data;
      this.loadingLevels = false;
      this.pagination.levels.collectionSize = res.data.total;
    })
  }

}
