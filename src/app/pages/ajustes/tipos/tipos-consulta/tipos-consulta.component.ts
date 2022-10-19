import { Component, OnInit } from '@angular/core';
import { TiposConsultaService } from './tipos-consulta.service';

@Component({
  selector: 'app-tipos-consulta',
  templateUrl: './tipos-consulta.component.html',
  styleUrls: ['./tipos-consulta.component.scss']
})
export class TiposConsultaComponent implements OnInit {

  loading: boolean = false
  tiposConsulta: any[] = []
  pagination: any = {
    page: 1,
    pageSize: 10,
    collectionSize: 0
  }


  constructor(private _tipoService: TiposConsultaService) { }

  ngOnInit(): void {
    this.getTiposConsulta();
  }

  getTiposConsulta(page = 1) {
    this.pagination.page = page;
    this.loading = true;
    this._tipoService.paginate(this.pagination)
      .subscribe((res: any) => {
        this.loading = false;
        this.tiposConsulta = res.data.data;
        this.pagination.collectionSize = res.total;
      })
  }

}
