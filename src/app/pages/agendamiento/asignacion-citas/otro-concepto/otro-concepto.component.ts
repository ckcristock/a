import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipificationService } from '../../../../core/services/tipification.service';
import { Subscription } from 'rxjs';
import { QueryPatient } from '../../query-patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otro-concepto',
  templateUrl: './otro-concepto.component.html',
  styleUrls: ['./otro-concepto.component.scss']
})
export class OtroConceptoComponent implements OnInit {
  $tramiteData: Subscription;
  tramiteData: any = {}
  tramiteSelected: any
  $tramiteSelected: Subscription;

  constructor(private _tipification: TipificationService,
    private _queryPatient: QueryPatient
  ) { }
  ngOnInit(): void {
    this.$tramiteData = this._queryPatient.tipificationData.subscribe(r => {
      this.tramiteData = r;
    })
    this.$tramiteSelected = this._queryPatient.tramiteSelected.subscribe(r => {
      this.tramiteSelected = r
    })
  }

  OnDestroy() {
    this.$tramiteData.unsubscribe();
    this.$tramiteSelected.unsubscribe();
  }
  save(form: NgForm) {
    try {
      this._queryPatient.validateTipification({ component: this.tramiteSelected, data: this.tramiteData });
    } catch (error) {
      Swal.fire('Faltan datos del proceso ', error, 'error');
    }
  }

 
}
