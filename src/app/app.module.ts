import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LihatCicilanComponent } from './lihat-cicilan/lihat-cicilan.component';
import { CicilanbaruComponent } from './cicilanbaru/cicilanbaru.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainMenuComponent,
    NavbarComponent,
    LihatCicilanComponent,
    CicilanbaruComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
