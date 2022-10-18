import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataDinamicService } from 'src/app/data-dinamic.service';
import { SwalService } from '../../services/swal.service';
import { Cup } from '../cup.model';
import { CupService } from '../cup.service';


@Component({
  selector: 'app-modal-cup',
  templateUrl: './modal-cup.component.html',
  styleUrls: ['./modal-cup.component.scss']
})
export class ModalCupComponent implements OnInit {

  @ViewChild('modal') modal: any;
  @ViewChild('add') add: any;
  @Output()

  dataChange: EventEmitter<string> = new EventEmitter<string>();

  cups: any = [];
  specialities: Array<object> = [];
  cups_type: Array<object> = [];
  colors: Array<object> = [];

  cup: Cup;

  filtros: any = {
    description: '',
    code: ''
  }
  form: FormGroup;
  status: any = 'Inactivo';
  loading: boolean = false;

  constructor(
    private _cupService: CupService,
    private _dataDinamic: DataDinamicService,
    private modalService: NgbModal,
    private _swal: SwalService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cup = new Cup;
    this.getSpecialties();
    this.getTypes();
    this.getColors();
    this.createForm();

  }

  createForm() {
    this.form = this.fb.group({
      id: [],
      description: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      specialities: ['', Validators.required],
      cup_type_id: [''],
      color_id: [''],
    });
  }

  closeResult = '';
  public openConfirm(confirm) {
    this.modalService.open(confirm, { ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any) {
    this.form.reset()
    this.cup.id = null
  }

  openModal = async () => {
    if (!this.cup.id) {
      this.openConfirm(this.add)
    } else {
      await this._cupService.getCup(this.cup.id).toPromise().then((req: any) => {
        this.openConfirm(this.add)
        this.cup = Object.assign({}, req.data)
        this.cup.specialities = this.transformData(req.data.specialities)
        this.form.patchValue({
          id: this.cup.id,
          description: req.data.description,
          code: req.data.code,
          specialities: this.cup.specialities,
          cup_type_id: req.data.cup_type_id,
          color_id: req.data.color_id,
        })
      })
    }
  }

  transformData = (array: Array<object>): any => array.map(({ ...obj }) => obj['id'])

  createNewCups() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this._cupService.createNewCup(this.form.value)
      .subscribe((res: any) => {
        if (res.code === 200) {
          this.dataChange.emit('');
          this.modalService.dismissAll();
          this._swal.show({
            icon: 'success',
            title: res.data,
            showCancel: false,
            text: '',
            timer: 1000,
          })
        } else {
          this._swal.show({
            icon: 'error',
            title: 'Operación denegada',
            showCancel: false,
            text: res.err,
          })
        }
      });
  }

  getSpecialties = () => {
    this._dataDinamic.getSpecialties('', '').subscribe((resp: any) => {
      this.specialities = resp.data;
    });
  }

  getTypes() {
    this._cupService.getTypes().subscribe((resp: any) => {
      this.cups_type = resp.data;
    });
  }

  getColors() {
    this._cupService.getColors().subscribe((resp: any) => {
      this.colors = resp.data;
    });
  }
}
