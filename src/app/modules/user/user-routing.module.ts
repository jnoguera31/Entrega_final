import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RproyectoComponent } from './rproyecto/rproyecto.component';
import { UserComponent } from './user.component';

const routes: Routes = [

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
