import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenidosComponent } from './contenidos/contenidos.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidosComponent,
    ActividadesComponent,
    FuncionesComponent,
    InicioComponent,
    EquipoComponent
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "inicio", component: InicioComponent },
      { path: "contenidos", component: ContenidosComponent },
      { path: "actividades", component: ActividadesComponent },
      { path: "funciones", component: FuncionesComponent },
      { path: "equipo", component: EquipoComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
