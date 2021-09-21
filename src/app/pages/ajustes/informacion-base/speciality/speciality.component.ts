import { Component, OnInit, ViewChild } from '@angular/core';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { SpecialityModalComponent } from './speciality-modal/speciality-modal.component';
import { SpecialityService } from './speciality.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {

  specialities: Array<object> = [];
  loading: boolean = false;

  filtros: any = {
    name: '',
    code: ''
  }

  pagination = {
    pageSize: 25,
    page: 1,
    collectionSize: 0
  }

  @ViewChild(SpecialityModalComponent) modal: SpecialityModalComponent

  constructor(private _specialityService: SpecialityService) { }

  ngOnInit(): void {
    this.getSpecialties()
  }

  getSpecialties(page = 1) {
    this.pagination.page = page;
    let params = {
      ...this.pagination, ...this.filtros
    }

    this.loading = true;
    this._specialityService.getAllPaginateSpeciality(params)
      .subscribe((res: any) => {
        this.loading = false;
        this.specialities = res.data.data;
        this.pagination.collectionSize = res.data.total;
      });
  }

  openModal = () => {
    this.modal.openModal()
  }
}
