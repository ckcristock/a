import { NgModule } from "@angular/core";
import { ImagePipe } from './image.pipe';
import { MinWordsPipe } from "./min-words.pipe";
import { ObjToArrayPipe } from "./obj-to-array.pipe";
import { PuntosPipe } from "./puntos";
import { SafePipe } from "./safe.pipe";
import { TimePipe } from "./time.pipe";


@NgModule({
    declarations: [ImagePipe, ObjToArrayPipe, PuntosPipe, TimePipe, MinWordsPipe, SafePipe],
    exports: [ImagePipe, ObjToArrayPipe, PuntosPipe, TimePipe, MinWordsPipe, SafePipe],
})

export class PipesModule { }