import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/core/response.model';
import { CallInService } from './call-in.service';

@Component({
  selector: 'undefined-call-in',
  templateUrl: './call-in.component.html',
  styleUrls: ['./call-in.component.css'],
  providers: [CallInService]
})
export class CallInComponent implements OnInit {


  public identifier: number = 0
  public dataForm: FormGroup;
  public calls: Array<object> = []
  public loading: boolean = false;

  constructor(private callInService: CallInService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  filters: any = {}

  pagination = {
    pageSize: 25,
    page: 1,
    collectionSize: 0,
  }

  searchIdentifier = (page = 1) => {
    this.filters = Object.assign({}, this.dataForm.value)
    this.loading = true;
    this.pagination.page = page;
    let params: any = Object.assign({}, this.pagination, this.filters);
    this.callInService.getCalls(params).subscribe((res: Response) => {
      this.calls = res.data.data
      this.pagination.collectionSize = res.data.total;
      this.loading = false;
    })
  }

  createForm = () => {
    this.dataForm = this.formBuilder.group({
      identifier: ['', [Validators.required]],
    }
    );
  }

}


