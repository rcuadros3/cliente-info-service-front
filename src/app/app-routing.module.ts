import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { VisualizarDatosComponent } from './visualizar-datos/visualizar-datos.component';

const routes: Routes = [
  { path:'',component: RegistroComponent },
  { path: 'visualizar-datos/:tipo/:numero', component: VisualizarDatosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
