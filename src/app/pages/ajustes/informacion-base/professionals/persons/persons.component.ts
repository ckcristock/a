import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { PersonService } from './person.service';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  searching = false;
  searchFailed = false;


  @ViewChild(TableComponent) table: TableComponent;

  constructor(
    private router: Router,
    private _service: PersonService
  ) { }

  ngOnInit(): void { }


  createOrUpdated = (id = null) => {
    this._service.id = id;
    this.router.navigate(['/ajustes/informacion-base/professionals/create'])
  }

  getDataTable = () => {
    this.table.getProfessionals();
  }

}