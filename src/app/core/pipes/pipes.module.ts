import { NgModule } from "@angular/core";
import { CustomcurrencyPipe } from "./customcurrency.pipe";
import { ImagePipe } from './image.pipe';
import { MinWordsPipe } from "./min-words.pipe";
import { ObjToArrayPipe } from "./obj-to-array.pipe";
import { PuntosPipe } from "./puntos";
import { SafePipe } from "./safe.pipe";
import { TimePipe } from "./time.pipe";
import { ObjToArraykeysPipe } from './obj-to-array-keys.pipe';
import { PayrollStatusPipe } from "./payroll-status.pipe";

@NgModule({
    declarations: [
        ImagePipe, 
        ObjToArrayPipe, 
        PuntosPipe, 
        TimePipe, 
        MinWordsPipe, 
        SafePipe, 
        CustomcurrencyPipe,
        ObjToArraykeysPipe,
        PayrollStatusPipe
    ],
    exports: [
        ImagePipe, 
        ObjToArrayPipe, 
        PuntosPipe, 
        TimePipe, 
        MinWordsPipe, 
        SafePipe, 
        CustomcurrencyPipe,
        ObjToArraykeysPipe,
        PayrollStatusPipe
    ]
})

export class PipesModule { }