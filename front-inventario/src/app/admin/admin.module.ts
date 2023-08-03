import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Module
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// Components imports
import { InventarioComponent } from './components/inventario/inventario.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FactibilidadesComponent } from './components/factibilidades/factibilidades.component';



@NgModule({
  declarations: [
    AdminComponent,
    InventarioComponent,
    NavBarComponent,
    FactibilidadesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
