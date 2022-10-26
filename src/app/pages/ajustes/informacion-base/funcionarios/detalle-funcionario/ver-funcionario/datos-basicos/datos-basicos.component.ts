import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { consts } from 'src/app/core/utils/consts';
import { DatosBasicosService } from './datos-basicos.service';
// import { functionsUtils } from 'src/app/core/utils/functionsUtils';
import { Subscription } from 'rxjs';
import { PersonDataService } from '../../../create/personData.service';
import { Person } from 'src/app/core/models/person.model';
import { ModalDatosBasicosComponent } from './modal-datos-basicos/modal-datos-basicos.component';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.scss']
})
export class DatosBasicosComponent implements OnInit {

  @ViewChild(ModalDatosBasicosComponent) modal: ModalDatosBasicosComponent;

  $person: Subscription;
  id: any;
  loading: boolean;
  funcionario: any;
  subscriptions: Subscription = new Subscription();

  constructor(
    private _person: PersonDataService,
    private activatedRoute: ActivatedRoute,
    private basicDataService: DatosBasicosService

  ) { }

  person: Person

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.$person = this._person.person.subscribe((r) => {
      this.person = r;
    });

    this.getBasicsData();
    this.subscriptions.add(this.basicDataService.datos$.subscribe(data => { this.getBasicsData(); }));

  }

  getBasicsData() {
    this.loading = true;
    this.basicDataService.getBasicsData(this.id)
      .subscribe((res: any) => {
        this.loading = false;
        this.funcionario = res.data;
      })
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
