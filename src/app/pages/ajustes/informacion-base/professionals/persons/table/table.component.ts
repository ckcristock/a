import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  pagination = {
    pageSize: 20,
    page: 1,
    collectionSize: 0,
  }

  filtros: any = {

    name: '',
    identifier: '',
    company: '',
    status: '',

  }

  public loading = true;
  public persons: Array<any> = []

  @Output()
  edit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _service: PersonService) { }


  ngOnInit(): void {
    this.getProfessionals()
  }


  getProfessionals(page = 1) {

    this.loading = true;
    this.pagination.page = page;
    let params = { ...this.pagination, ...this.filtros }

    this._service.getPeople(params).subscribe((res: any) => {
      this.persons = res.data.data
      this.pagination.collectionSize = res.data.total
      this.pagination.pageSize = res.data.per_page
      this.loading = false;

    })
  }

  suspend = () => {
    console.log('suspendiendo');
  }

  update = (id) => {
    this.edit.emit(id)
  }
}
