import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LihatCicilanComponent } from './lihat-cicilan/lihat-cicilan.component';
import { CicilanbaruComponent } from './cicilanbaru/cicilanbaru.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpconfigInterceptor } from './interceptor/httpconfig.interceptor';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VideoCallComponent } from './video-call/video-call.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainMenuComponent,
    NavbarComponent,
    LihatCicilanComponent,
    CicilanbaruComponent,
    LoginComponent,
    VideoCallComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,   
    HttpClientModule,
    FormsModule



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
