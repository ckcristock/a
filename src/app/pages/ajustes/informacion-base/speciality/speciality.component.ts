import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Response } from 'src/app/core/response.model';
import { showConfirm, successMessage } from 'src/app/core/utils/confirmMessage';
import { SpecialityModalComponent } from './speciality-modal/speciality-modal.component';
import { SpecialityService } from './speciality.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss']
})
export class SpecialityComponent implements OnInit {
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
    this.modal.speciality.id = 0
    this.modal.openModal()
  }

  edit = (id: Number) => {
    this.modal.speciality.id = id
    this.modal.openModal()
  }

  inactive = async (id: Number, status: string) => {
    showConfirm(status, 'Especialidad').then((result) => {
      if (result.isConfirmed) this._specialityService.ChangeSpeciality(id, status)
        .subscribe((res: Response) => {
          this.getSpecialties()
          successMessage(null, res.data)
        });
    })
  }

}
