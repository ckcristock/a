import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentosGestionComponent } from './documentos-gestion/documentos-gestion.component';
import { SstRoutingModule } from './sst.routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService } from '@syncfusion/ej2-angular-filemanager';



@NgModule({
    declarations:[DocumentosGestionComponent],
    imports:[CommonModule, SstRoutingModule,ComponentsModule,FileManagerModule, NgbNavModule],
    providers: [NavigationPaneService, ToolbarService, DetailsViewService],
    exports:[],
})

export class SstModule {}