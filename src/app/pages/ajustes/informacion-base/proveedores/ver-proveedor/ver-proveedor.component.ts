import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.scss'],
})
export class VerProveedorComponent implements OnInit {
  public id = this.route.snapshot.params['id'];
  public studentChartData: any;
  public studentChartOption: any;
  public Cartera = 0;
  public Facturas = 0;
  @ViewChild('studentChart') studentChart: ElementRef;
  public facturacionChartTag: CanvasRenderingContext2D;
  public Meta: any = [];
  anio = [];
  Ventas = [];
  public Mes = [];
  public Proveedor: any = {};
  public Cargando = true;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.http
      .get(environment.ruta + 'php/proveedores/ver_proveedor.php', {
        params: { id: this.id },
      })
      .subscribe((data: any) => {
        this.Proveedor = data.Cliente;
      });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    const facturacion_tag = (<HTMLCanvasElement>this.studentChart.nativeElement)
      .children;
    this.facturacionChartTag =
      facturacion_tag['facturacion_chart'].lastChild.getContext('2d');
    const def = this.facturacionChartTag.createLinearGradient(500, 0, 100, 0);
    const def1 = this.facturacionChartTag.createLinearGradient(500, 0, 100, 0);
    def.addColorStop(0, '#2ed8b6');
    def.addColorStop(1, '#7cffe5');
    def1.addColorStop(0, '#d8612e');
    def1.addColorStop(1, '#b24d21');

    this.http
      .get(environment.ruta + 'php/proveedores/grafica_proveedor.php', {
        params: { id: this.id },
      })
      .subscribe((data: any) => {
        data.Grafica.forEach((element) => {
          this.Mes.push(element.Mes);
          this.Ventas.push(element.Ventas);
        });
        this.Cartera = data.Cartera;
        this.Facturas = data.Facturas;
        setTimeout(() => {
          this.studentChartData = {
            labels: this.Mes,
            datasets: [
              {
                label: 'Ventas',
                borderColor: def1,
                pointBorderColor: '#fff',
                pointBackgroundColor: def1,
                pointHoverBackgroundColor: def1,
                pointHoverBorderColor: def1,
                pointBorderWidth: 2,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 8,
                fill: false,
                borderWidth: 2,
                data: this.Ventas,
              },
            ],
          };
        }, 500);
      });
  }
}
