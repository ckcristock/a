import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [SearchPipe],
  exports: [SearchPipe],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class SharedModule { }
