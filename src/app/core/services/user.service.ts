import { Injectable, NgZone } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from "../models/users.model";
import { LoginForm } from '../interfaces/login-form.interface';




const base_url = environment.base_url;

@Injectable({
    providedIn: 'root'
})

export class UserService {

    public user: User;

    constructor(private http: HttpClient,
        private router: Router,
        private ngZone: NgZone) {

    }

    get token(): string {
        return localStorage.getItem('token') || '';
    }

    guardarLocalStorage(token: string, menu: any) {
        localStorage.setItem('token', token);
        //localStorage.setItem('menu', JSON.stringify(menu));
    }

    validarToken(): boolean {
        /* validarToken(): Observable<boolean> { */

        if (this.token) {
            const resp = {
                user: {
                    email: '', first_name: 'carlos', second_name: 'Daniel',
                    fist_surname: 'Cardona', second_surname: 'Tamayo',
                    password: 'asdasdas', image: '',
                }
            }

            const { email, first_name, second_name, fist_surname, second_surname, password, image } = resp.user;
            this.user = new User(first_name, second_name, fist_surname, second_surname, email, password, image);
            return true
        } else {
            return false
        }

        /*
            return this.http.get(`${base_url}/login/renew`, {
                headers: {
                    'x-token': this.token
                }
            }).pipe(
                map((resp: any) => {
                    //const { email, google, nombre, role, img = '', uid } = resp.user;
                    this.user = new user(nombre, email, '', img, google, role, uid); 
                   / this.guardarLocalStorage(resp.token, resp.menu); 
                    return true;
                }),
                catchError(error => of(false))
            );*/

    }

    logout() {
        localStorage.removeItem('token');
        //localStorage.removeItem('menu');
        this.router.navigateByUrl('/login');
    }


    login(formData: LoginForm) {

       /*  return this.http.post(`${base_url}/login`, formData)
            .pipe(
                tap((resp: any) => { */
                    let resp = {token:'asdas',menu:'asdad'}
                    this.guardarLocalStorage(resp.token, resp.menu);
         /*        })
            );
 */
    }
}