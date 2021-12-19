import { FormComponent } from './contenido/form/form.component';
import { AppRoutingModule } from './app.routing.module';
import { ClientesService } from './Services/clientes.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/clientes/contenido.component';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './contenido/crear/crear.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './usuarios/login/login.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContenidoComponent,
    FormComponent,
    CrearComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
