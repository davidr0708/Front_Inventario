import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { FactibilidadesComponent } from './pages/factibilidades/factibilidades.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// export const AdminRouting: Routes = [
//   {
//     path: '',
//     component: AdminComponent,
//     children: [
//       {path: 'dashboard', component: DashboardComponent},
//       {path: 'inventario', component: InventarioComponent},
//       {path: 'factibilidades', component: FactibilidadesComponent},
//       {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
//       {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
//     ]
//   },
//   {path: '', redirectTo: '/', pathMatch: 'full'},
//   {path: '**', redirectTo: '/', pathMatch: 'full'}
// ];
const AdminRouting: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'inventario', component: InventarioComponent},
      {path: 'factibilidades', component: FactibilidadesComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(AdminRouting)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }