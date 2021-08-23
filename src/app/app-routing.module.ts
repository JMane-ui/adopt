import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
//import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MostrarPerritosComponent } from './components/mostrar-perritos/mostrar-perritos.component';
import { HomeComponent } from './components/home/home.component';
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


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mostrarPerritos',
    component: MostrarPerritosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'informes',
    component: InformesComponent,
  },
  {
    path: 'cuidadosBasicos',
    component: CuidadosBasicosComponent,
  },
  {
    path: 'acercaDeNosotros',
    component: AcercaDeNosotrosComponent,
  },
  {
    path: 'perritosAdoptados',
    component: PerritosAdoptadosComponent,
  },
  {
    path: 'donaciones',
    component: DonacionesComponent,
  },
  {
    path: 'vacunas',
    component: VacunasComponent,
  },
  {
    path: 'fq',
    component: FqComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'esterilizaciones',
    component: EsterilizacionesComponent,
  },
  {
    path: 'donacionesCampania',
    component: DonacionesCampaniaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
