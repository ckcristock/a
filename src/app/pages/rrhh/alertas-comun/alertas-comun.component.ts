import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertasComunService } from './alertas-comun.service';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alertas-comun',
  templateUrl: './alertas-comun.component.html',
  styleUrls: ['./alertas-comun.component.scss'],
})
export class AlertasComunComponent implements OnInit {
  @ViewChild('modal') modal: any;
  datas: any[] = [];
  loading: boolean = false;
  closeResult = '';
  pagination = {
    page: 1,
    pageSize: 10,
    collectionSize: 0
  }

  constructor(
    private _alert: AlertasComunService,
    private route: ActivatedRoute,
    private _modal: ModalService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getAlerts();
  }

  public openConfirm(confirm) {
    this.modalService.open(confirm, { ariaLabelledBy: 'modal-basic-title', size: 'md', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) {
    //this.form.reset()
  }

  openModal(content) {
    this._modal.openLg(content)
  }

  getAlerts(page = 1) {
    this.loading = true
    this.pagination.page = page;
    let person_id = this.route.snapshot.params.pid;
    let param = person_id ? { person_id } : {}
    let params = {
      ...param, ...this.pagination
    }
    this._alert.getAlerts(params).subscribe((r: any) => {
      this.datas = r.data.data;
      this.pagination.collectionSize = r.data.total;
      this.loading = false
    });
  }
}
