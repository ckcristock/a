import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) { }
    personTask(id) {
        return this.http.get(`${environment.base_url}/task/${id}`)
    }
    personTaskFor(id) {
        return this.http.get(`${environment.base_url}/taskfor/${id}`)
    }
    personCompany(companyId) {
        return this.http.get(`${environment.base_url}/taskperson/${companyId}`)
    }
    personTaskPendiente(personId) {
        return this.http.get(`${environment.base_url}/person-taskpendientes/${personId}`)
    }
    personTaskEjecucion(personId) {
        return this.http.get(`${environment.base_url}/person-taskejecucion/${personId}`)
    }
    personTaskEspera(personId) {
        return this.http.get(`${environment.base_url}/person-taskespera/${personId}`)
    }
    personTaskFinalizado(personId) {
        return this.http.get(`${environment.base_url}/person-taskfinalizado/${personId}`)
    }
    updateFinalizado(id) {
        return this.http.post(`${environment.base_url}/updatefinalizado/${id}`, id)
    }
    updatePendiente(id2) {
        return this.http.post(`${environment.base_url}/updatependiente/${id2}`, id2)
    }
    updateEjecucion(id3) {
        return this.http.post(`${environment.base_url}/updateejecucion/${id3}`, id3)
    }
    updateEspera(id4) {
        return this.http.post(`${environment.base_url}/updateespera/${id4}`, id4)
    }
    newTask(task) {
        return this.http.post(`${environment.base_url}/newtask/${task}`, task)
    }
    taskView(id) {
        return this.http.get(`${environment.base_url}/taskview/${id}`) 
    }
}
