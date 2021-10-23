import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurneroComponent } from './turnero.component';
import { TurneroRoutes } from './turnero.routing';

@NgModule({
  imports: [
    CommonModule,
    TurneroRoutes
  ],
  declarations: [TurneroComponent]
})
export class TurneroModule { }
