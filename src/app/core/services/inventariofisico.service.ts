import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InventariofisicoService {

  constructor(private client: HttpClient) { }

   IniciarInventario(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/iniciar_inventario_barrido.php', { params: p });
  }

   GetInventarioFisico(idInventario: string): Observable<any> {
    let p = { id_inventario: idInventario };
    return this.client.get(environment.ruta + 'php/inventariofisico/get_inventario_iniciado.php', { params: p });
  }

   GetProducto(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/consulta_producto_barrido.php', { params: p });
  }

   saveLote(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/agrega_productos_barrido.php', data);
  }
   AjustarInventario(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/ajustar_inventario.php', data);
  }

   ValidarInventario(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/validar_inventario.php?inv=' + p);
  }

   GetProductosSinDiferencia(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/inventario_sin_diferencia_barrido.php?inv=' + p);
  }


   SaveInventarioFinal(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/guardar_inventario_final_barrido.php', data);
  }
   DescargarInforme(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/descargar_excel_diferencias.php', data);
  }


/**
 * Nuevo modelo
 */


   GetProductoEstiba(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/consulta_producto.php', { params: p });
  }

   SaveLoteEstiba(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/agrega_productos.php', data);
  }
   SaveLoteEstibaPunto(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisicopuntos/estiba/agrega_productos.php', data);
  }
   GestionarEstado(data:FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/gestion_de_estado.php', data);
  }
   GestionarEstado_Custom(data:FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventario_auditor/gestion_estado_custom.php', data);
  }

   GestionarEstadoPunto(data:FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisicopuntos/estiba/gestion_de_estado.php', data);
  }

   GetDocumentosIniciados(): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/documentos_iniciados.php');
  }
   GetDocumentosIniciadosPuntos(): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/documentos_iniciados.php');
  }
   GetDocumentosTerminados(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/documentos_terminados.php', { params : p });
  }
   GetDocumentosTerminadosPunto(p: any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/documentos_terminados.php', { params : p });
  }
    GetInventario(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/get_inventario.php',{ params: p });
  }

   GetInventarioPunto(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/get_inventario.php',{ params: p });
  }

   SaveReconteo(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/guardar_reconteo.php', data);
  }

   SaveReconteoAuditor(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventario_auditor/save_reconteo.php', data);
  }

   SaveReconteoPunto(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisicopuntos/estiba/guardar_reconteo.php', data);
  }

   GetDocumentosParaAjustar(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/documentos_para_ajustar.php',{ params: p });
  }

   GetDocumentosParaAjustarAuditables(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventario_auditor/documentos_para_ajustar_auditables.php',{ params: p });
  }

   GetDocumentosParaAjustarPunto(p:any): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/documentos_para_ajustar.php',{ params: p });
  }

   SaveInventarioFinalEstiba(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/guardar_inventario_final.php', data);

  }

   SaveInventarioFinalEstibaAuditor(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventario_auditor/guardar_inventario_final.php', data);
  }
   SaveInventarioFinalEstibaPunto(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisicopuntos/estiba/guardar_inventario_final.php', data);
  }

   ValidarInventarioEstiba(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/validar_inventario.php?inv=' + p);
  }

   ValidarInventarioAuditable(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventario_auditor/reconteo.php?inv=' + p);
  }

   ValidarInventarioEstibaPuntos(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/validar_inventario.php?inv=' + p);
  }

   getInventarioFisicoTerminado(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisico/estiba/ver_inventario_terminado.php?Id_Inventario_Fisico_Nuevo=' + p);
  }
   getInventarioAuditableTerminado(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventario_auditor/show_inventario_Terminado.php?Id=' + p);
  }
   getInventarioFisicoTerminadoPunto(p: string): Observable<any> {
    return this.client.get(environment.ruta + 'php/inventariofisicopuntos/estiba/ver_inventario_terminado.php?Id_Inventario_Fisico_Punto_Nuevo=' + p);
  }

   DescargarInformeEstiba(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/descargar_excel_diferencias.php', data);
  }

   AjustarInventarioEstiba(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisico/estiba/ajustar_inventario.php', data);
  }
   AjustarInventarioEstibaPuntos(data: FormData): Observable<any> {
    return this.client.post(environment.ruta + 'php/inventariofisicopuntos/estiba/ajustar_inventario.php', data);
  }
}
