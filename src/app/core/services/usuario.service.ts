import { Injectable, NgZone } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';




const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})

export class UsuarioServicio {


    constructor(private http: HttpClient,
        private router: Router,
        private ngZone: NgZone) {

    }

    get token(): string {
        return localStorage.getItem('token') || '';
    }

    guardarLocalStorage(token: string, menu: any) {

        localStorage.setItem('token', token);
        localStorage.setItem('menu', JSON.stringify(menu));

    }

    validarToken(): boolean {
    /* validarToken(): Observable<boolean> { */

        if (this.token) {
            
            return true
        }else{
            return false
        }
    /*
        return this.http.get(`${base_url}/login/renew`, {
            headers: {
                'x-token': this.token
            }
        }).pipe(
            map((resp: any) => {
                //const { email, google, nombre, role, img = '', uid } = resp.usuario;
                //this.usuario = new Usuario(nombre, email, '', img, google, role, uid); 
               //  this.guardarLocalStorage(resp.token, resp.menu); 
                return true;
            }),
            catchError(error => of(false))
        );*/

    }
}