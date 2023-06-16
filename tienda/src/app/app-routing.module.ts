import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';
// Definición de las rutas
const routes: Routes = [
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },
  { path: 'tienda', component: TiendaComponent },
  { path: 'productos', component: ProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuración de las rutas principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
