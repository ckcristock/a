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
  // @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(
    private router: Router,
    private _service: PersonService
  ) { }

  ngOnInit(): void { }


  createOrUpdated = (id = null) => {
    // this.modal.id = id;
    // console.log(id);
    this._service.id = id;
    this.router.navigateByUrl('/ajustes/informacion-base/professionals/create')
    // this.modal.show();
  }

  getDataTable = () => {
    this.table.getProfessionals();
  }

}