import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { functionsUtils } from '../../../../../core/utils/functionsUtils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.scss'],
})
export class EditarProveedorComponent implements OnInit {
  public id = this.route.snapshot.params['id'];
  public Producto: any = {};
  public Familias: any[] = [];
  public Subcategorias: any[] = [];
  public Fotos: any;
  public Lista: any = [];
  public Codigo_Barras: any = '';
  public Identificacion_Funcionario = '1';
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  @ViewChild('confirmacionSwal') confirmacionSwal: any;
  ngOnInit() {
    this.http
      .get(environment.ruta + 'php/genericos/detalle.php', {
        params: { modulo: 'Producto', id: this.id },
      })
      .subscribe((data: any) => {
        this.Producto = JSON.parse(
          functionsUtils.utf8_decode(JSON.stringify(data))
        );
        this.Codigo_Barras = data.Codigo_Barras;
        // console.log(this.Producto);
      });
    this.http
      .get(environment.ruta + 'php/lista_generales.php', {
        params: { modulo: 'Familia' },
      })
      .subscribe((data: any) => {
        this.Familias = data;
      });
    this.http
      .get(environment.ruta + 'php/lista_generales.php', {
        params: { modulo: 'Subcategoria' },
      })
      .subscribe((data: any) => {
        this.Subcategorias = data;
      });
    this.http
      .get(environment.ruta + 'php/productos/lista.php', {
        params: {
          id: this.id,
        },
      })
      .subscribe((data: any) => {
        this.Lista = data;
      });
  }
  normalize = (function () {
    var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç',
      to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc',
      mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
      mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i))) ret.push(mapping[c]);
        else ret.push(c);
      }
      return ret.join('');
    };
  })();
  CargaFoto(event) {
    let fot = document.getElementById('foto_visual') as HTMLImageElement;

    if (event.target.files.length === 1) {
      this.Fotos = event.target.files[0];

      let url = URL.createObjectURL(event.target.files[0]);
      // console.log(url);

      fot.src = url;
    }
  }
  GuardarProducto(formulario: NgForm) {
    // console.log(formulario.value);

    let info = JSON.stringify(formulario.value);
    let lista = this.normalize(JSON.stringify(this.Lista));
    let datos = new FormData();
    datos.append('modulo', 'Producto');
    datos.append('datos', functionsUtils.utf8_encode(info));
    datos.append('lista', lista);
    datos.append('funcionario', this.Identificacion_Funcionario);
    datos.append('Foto', this.Fotos);
    this.http
      .post(environment.ruta + 'php/productos/producto_guardar.php', datos)
      .subscribe((data: any) => {
        this.confirmacionSwal.title = 'Producto actualizado';
        this.confirmacionSwal.text = 'Producto actualizado correctamente';
        this.confirmacionSwal.type = 'success';
        this.confirmacionSwal.fire();
        formulario.reset();
        this.VerPantallaLista();
        this.Fotos = [];
      });
  }
  VerPantallaLista() {
    this.router.navigate(['/base/productos']);
  }

  ValidarCodigo() {
    this.http
      .get(environment.ruta + 'php/productos/validar_codigo.php', {
        params: { codigo: this.Codigo_Barras },
      })
      .subscribe((data: any) => {
        if (data.Id_Producto) {
          let html = `
          <h5>Este codigo de barras ya esta asociado a otro producto:</h5>
         
          <ul>
            <li><strong style="font-weight:bold;font-size:15px">Nombre: </strong> <span style="font-size:15px">${data.Nombre_Comercial}</span></li>
            <li><strong style="font-weight:bold;font-size:15px">Laboratorio: </strong> <span style="font-size:15px">${data.Laboratorio_Comercial}</span></li>
            <li><strong style="font-weight:bold;font-size:15px">Embalaje: </strong> <span style="font-size:15px">${data.Embalaje}</span></li>
          </ul>
        `;
          this.confirmacionSwal.title = '';
          this.confirmacionSwal.html = html;
          this.confirmacionSwal.icon = 'warning';
          this.confirmacionSwal.fire();
          this.Codigo_Barras = this.Producto.Codigo_Barras;
        }
      });
  }
}
