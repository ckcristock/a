import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
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
  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor() { }

  ngOnInit(): void { }


  createOrUpdated = (id = null) => {
    this.modal.id = id;
    this.modal.show();
  }

  getDataTable = () => {
    this.table.getProfessionals();
  }

}