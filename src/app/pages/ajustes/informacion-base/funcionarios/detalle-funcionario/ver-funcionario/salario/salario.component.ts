import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalarioService } from './salario.service';
import { consts } from 'src/app/core/utils/consts';
import Swal from 'sweetalert2';
import { DatosBasicosService } from '../datos-basicos/datos-basicos.service';
import { SwalService } from '../../../../services/swal.service';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.scss']
})
export class SalarioComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild('add') add: any;
  form: FormGroup;
  data: any;
  id: any;
  contract_types;
  salary_info: any;
  loading: boolean;
  constructor(
    private fb: FormBuilder,
    private salaryService: SalarioService,
    private activateRoute: ActivatedRoute,
    private basicDataService: DatosBasicosService,
    private _swal: SwalService,
    private _modal: ModalService,
  ) { }

  ngOnInit(): void {
    this.salaryService.getWorkContractType().subscribe((d: any) => {
      this.contract_types = d.data;
    });;
    this.id = this.activateRoute.snapshot.params.id;
    this.getSalaryInfo();
    this.createForm();
  }

  openModal() {
    this._modal.open(this.add);
  }

  createForm() {
    this.form = this.fb.group({
      id: [''],
      salary: ['', Validators.required],
      work_contract_type_id: ['', Validators.required],
      date_of_admission: ['', Validators.required],
      date_end: ['', Validators.required]
    });
  }

  getSalaryInfo() {
    this.loading = true;
    this.salaryService.getSalaryInfo(this.id)
      .subscribe((res: any) => {
        this.loading = false;
        this.salary_info = res.data;
        this.form.patchValue({
          id: this.salary_info.id,
          salary: this.salary_info.salary,
          work_contract_type_id: this.salary_info.work_contract_type_id,
          date_of_admission: this.salary_info.date_of_admission,
          date_end: this.salary_info.date_end
        })
        if (this.form.get('work_contract_type_id').value != 2) {
          this.form.patchValue({ date_end: null });
          this.form.get('date_end')?.clearValidators();
        }
      });
  }

  changeType() {
    if (this.form.get('work_contract_type_id').value == 2) {
      this.form.get('date_end').setValidators(Validators.required);
    } else {
      this.form.get('date_end')?.clearValidators();
      this.form.patchValue({ date_end: null });
    }
  }

  updateSalaryInfo() {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return false; }
    this.salaryService.updateSalaryInfo(this.form.value)
      .subscribe(res => {
        this._modal.close();
        this.getSalaryInfo();
        this._swal.show({
          title: 'Actualizado correctamente',
          icon: 'success',
          text: '',
          timer: 1000,
          showCancel: false
        })
        this.basicDataService.datos$.emit()
      });
  }
  get work_contract_type_id_valid() {
    return (
      this.form.get('work_contract_type_id').invalid && this.form.get('work_contract_type_id').touched
    );
  }

  get salary_valid() {
    return (
      this.form.get('salary').invalid && this.form.get('salary').touched
    );
  }

  get date_of_admission_valid() {
    return (
      this.form.get('date_of_admission').invalid && this.form.get('date_of_admission').touched
    );
  }

  get date_end_valid() {
    return (
      this.form.get('date_end').invalid && this.form.get('date_end').touched
    );
  }
}
