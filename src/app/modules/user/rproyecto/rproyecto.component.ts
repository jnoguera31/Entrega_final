import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/class/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-rproyecto',
  templateUrl: './rproyecto.component.html',
  styleUrls: ['./rproyecto.component.sass']
})
export class RproyectoComponent implements OnInit{
  public regpro: Proyecto = new Proyecto
  constructor(
   private proyectoService : ProyectoService,
   public route: Router
  ){
  
  }
  ngOnInit(){
    
  }

  Onsave(){
    this.proyectoService.createP(this.regpro).subscribe(()=>{
      this.route.navigate(['/user'])
    })
  }
  
  
}
