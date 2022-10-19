import { Component, OnInit } from '@angular/core';
import { TiposAgendaService } from './tipos-agenda.service';

@Component({
  selector: 'app-tipos-agenda',
  templateUrl: './tipos-agenda.component.html',
  styleUrls: ['./tipos-agenda.component.scss']
})
export class TiposAgendaComponent implements OnInit {
  loading: boolean = false
  tiposAgenda: any [] = []
  pagination: any = {
    page: 1,
    pageSize: 10,
    collectionSize: 0
  }


  constructor(private _tipoService: TiposAgendaService) { }

  ngOnInit(): void {
    this.getTiposAgenda();
  }

  getTiposAgenda(page = 1) {
    this.pagination.page = page;
    this.loading = true;
    this._tipoService.paginate(this.pagination)
      .subscribe((res:any) => {
        this.loading = false;
        this.tiposAgenda = res.data.data;
        this.pagination.collectionSize = res.total;
      })
  }

}
