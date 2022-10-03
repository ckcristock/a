import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {
  constructor(private modalService: NgbModal) {}
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  close() {
    this.modalService.dismissAll();
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
  openScrollableContent(content) {
    this.modalService.open(content, { scrollable: true, size: 'lg' });
  }
}
