import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { UsuarioServicio } from "../services/usuario.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private usuarioService: UsuarioServicio,
        private router: Router) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let validacion = this.usuarioService.validarToken()

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
        let validacion = this.usuarioService.validarToken()

        if (!validacion) {
            this.router.navigateByUrl('/login');
        }

        return validacion;
    }



}