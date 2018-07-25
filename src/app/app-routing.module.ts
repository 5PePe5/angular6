import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent }   from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { ProyectosComponent} from './proyectos/proyectos.component';
import { QuienessomosComponent} from './quienessomos/quienessomos.component';
import { InicioComponent} from './inicio/inicio.component';
import { CreaunacolectaComponent} from './creaunacolecta/creaunacolecta.component';
import {ComodonarComponent} from './comodonar/comodonar.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'quienessomos',
    component: QuienessomosComponent
  },
  {
    path: 'comodonar',
    component: ComodonarComponent
  },
  {
    path: 'registro',
    component: FooterComponent
  },
 
  {
  path: 'creaunacolecta',
  component: CreaunacolectaComponent
  },
 
  {
    path: 'contacto',
    component: ContactoComponent
    },
    {
      path: 'login',
      component: LoginComponent
      },
  { path: '', redirectTo: '/contacto', pathMatch: 'full' }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
 
})

export class AppRoutingModule { }
