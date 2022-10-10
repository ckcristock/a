import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasMedicasComponent } from './cuentas-medicas.component';
import { RadicacionComponent } from './radicacion/radicacion.component';
import { CuentasMedicasRoutingModule } from './cuentas-medicas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CuentasMedicasRoutingModule
  ],
  declarations: [
    CuentasMedicasComponent, 
    RadicacionComponent
  ]
})
export class CuentasMedicasModule { }
