import { NgModule } from "@angular/core";
import { ImagePipe } from './image.pipe';
import { ObjToArrayPipe } from "./obj-to-array.pipe";


@NgModule({
    declarations: [ImagePipe, ObjToArrayPipe],
    exports: [ImagePipe, ObjToArrayPipe],
})

export class PipesModule { }