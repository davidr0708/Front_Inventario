import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { FactibilidadesComponent } from './components/factibilidades/factibilidades.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'inventario', component: InventarioComponent},
      {path: 'factibilidades', component: FactibilidadesComponent},
      {path: '', redirectTo: 'inventario', pathMatch: 'full'},
      {path: '**', redirectTo: 'inventario', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }