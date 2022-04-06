import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
