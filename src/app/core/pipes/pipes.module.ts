import { NgModule } from "@angular/core";
import { ImagePipe } from './image.pipe';
import { ObjToArrayPipe } from "./obj-to-array.pipe";
import { PuntosPipe } from './puntos.pipe';
import { CustomcurrencyPipe } from './customcurrency.pipe';


@NgModule({
    declarations: [ImagePipe, ObjToArrayPipe, PuntosPipe, CustomcurrencyPipe],
    exports: [ImagePipe, ObjToArrayPipe, PuntosPipe, CustomcurrencyPipe],
})

export class PipesModule { }