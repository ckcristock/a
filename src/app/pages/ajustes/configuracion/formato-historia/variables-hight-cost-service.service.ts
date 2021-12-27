import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class VariablesHightCostServiceService {

    constructor(private httpClient: HttpClient) { }

    store = (data) => {
        return this.httpClient.post(`${environment.base_url}/variables-hight-cost`, data)
    }
}
