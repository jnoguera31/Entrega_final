import { ProyectoService } from 'src/app/services/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/class/proyecto';
import { Items } from 'src/app/class/items';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  public proyectos: Proyecto[]=[]
 
  constructor(
    private ProyectoService: ProyectoService
  ){}

  ngOnInit() {
    
    
  }
}
