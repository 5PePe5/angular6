import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent }   from './footer/footer.component'
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
 
})

export class AppRoutingModule { }
