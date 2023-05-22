import { HomeModule } from './modules/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserComponent } from './modules/user/user.component';
import { RproyectoComponent } from './modules/user/rproyecto/rproyecto.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule )},
  { path: 'user', component: UserComponent},
  { path: 'rproyecto', component: RproyectoComponent},
  { path: '**', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule )},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
