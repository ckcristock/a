import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalogo-contabilidad',
  templateUrl: './catalogo-contabilidad.component.html',
  styleUrls: ['./catalogo-contabilidad.component.scss']
})
export class CatalogoContabilidadComponent implements OnInit {
  active = 1
  @Input('accounts') accounts: any[]
  constructor(    ) { }

  ngOnInit(): void {
  }

}
