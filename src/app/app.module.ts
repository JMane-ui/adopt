import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MostrarPerritosComponent } from './components/mostrar-perritos/mostrar-perritos.component';
import { InformesComponent } from './components/informes/informes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CuidadosBasicosComponent } from './components/cuidados-basicos/cuidados-basicos.component';
import { AcercaDeNosotrosComponent } from './components/acerca-de-nosotros/acerca-de-nosotros.component';
import { PerritosAdoptadosComponent } from './components/perritos-adoptados/perritos-adoptados.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { VacunasComponent } from './components/vacunas/vacunas.component';
import { FqComponent } from './components/fq/fq.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EsterilizacionesComponent } from './components/esterilizaciones/esterilizaciones.component';
import { DonacionesCampaniaComponent } from './components/donaciones-campania/donaciones-campania.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MostrarPerritosComponent,
    InformesComponent,
    ContactoComponent,
    CuidadosBasicosComponent,
    AcercaDeNosotrosComponent,
    PerritosAdoptadosComponent,
    DonacionesComponent,
    VacunasComponent,
    FqComponent,
    EventosComponent,
    EsterilizacionesComponent,
    DonacionesCampaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
