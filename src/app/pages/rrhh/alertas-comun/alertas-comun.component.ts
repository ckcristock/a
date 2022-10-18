import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertasComunService } from './alertas-comun.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-alertas-comun',
  templateUrl: './alertas-comun.component.html',
  styleUrls: ['./alertas-comun.component.scss'],
})
export class AlertasComunComponent implements OnInit {
  @ViewChild('modal') modal: any;
  datas: any[] = [];
  loading: boolean = false

  constructor(private _alert: AlertasComunService, private route:ActivatedRoute, private _modal: ModalService) {}

  ngOnInit(): void {
    this.getAlerts();
  }

  openModal(content) {
    this._modal.openLg(content)
  }

  getAlerts() {
    this.loading = true
    let person_id = this.route.snapshot.params.pid;
    let param  = person_id  ? {person_id} : {}
    this._alert.getAlerts(param).subscribe((r: any) => {
      this.datas = r.data;
      this.loading = false
    });
  }
}
