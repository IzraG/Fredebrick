import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LihatCicilanComponent } from './lihat-cicilan/lihat-cicilan.component';
import { CicilanbaruComponent } from './cicilanbaru/cicilanbaru.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpconfigInterceptor } from './interceptor/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainMenuComponent,
    NavbarComponent,
    LihatCicilanComponent,
    CicilanbaruComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
