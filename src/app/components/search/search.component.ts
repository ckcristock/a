import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from 'src/app/core/services/user.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  forma: FormGroup;
  miniForm: FormGroup;

  @Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  
  searchText: string = '';
  constructor(private fb: FormBuilder,
    private _valReactive: UserService
  ) { }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {

    this.form = this.fb.group({
      firstName: ['', [this._valReactive.minLength(5), this._valReactive.required]],
      lastName: ['', [this._valReactive.required]],
      jobTitle: ['', this._valReactive.required],
      gender: ['', this._valReactive.required],
      agefrom: ['', this._valReactive.required],
      ageto: ['', this._valReactive.required],
    });
  }

  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
    this.groupFilters.emit(filters);
  }
}