import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Module
// import { AdminRouting } from './admin.routing';
// import { AdminComponent } from './admin.component';
// Components imports
import { InventarioComponent } from './pages/inventario/inventario.component';
import { FactibilidadesComponent } from './pages/factibilidades/factibilidades.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


// Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AdminRoutingModule } from './admin-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    InventarioComponent,
    FactibilidadesComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(AdminRoutingModule),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
