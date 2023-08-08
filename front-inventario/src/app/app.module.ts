import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { SideBarComponent } from './admin/components/side-bar/side-bar.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    // AdminComponent,
    // SideBarComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(AppRoutingModule),
    HttpClientModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
