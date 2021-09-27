import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssingService {

    public dataChange = new Subject<any>();
    public returnStep = new Subject<any>();

    constructor() { }
}