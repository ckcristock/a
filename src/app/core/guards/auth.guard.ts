import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from '../services/user.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private _user: UserService,
        private router: Router) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let validacion = this._user.validarToken()

        if (!validacion) {
            this.router.navigateByUrl('/login');
        }

        return validacion;
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        /*  return this.usuarioService.validarToken()
           .pipe(
             tap( estaAutenticado =>  {
               if ( !estaAutenticado ) {
                 this.router.navigateByUrl('/login');
               }
             })
           ); */
        let validacion = this._user.validarToken()

        if (!validacion) {
            this.router.navigateByUrl('/login');
        }

        return validacion;
    }



}