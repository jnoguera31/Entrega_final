import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/class/items';
import { Proyecto } from 'src/app/class/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';



@Component({
  selector: 'app-usercolum',
  templateUrl: './usercolum.component.html',
  styleUrls: ['./usercolum.component.sass']
})
export class UsercolumComponent implements OnInit {
  public proyectosm: Proyecto[]=[]
  public items: Items = new Items
  constructor(
    private ProyectoServices: ProyectoService
  ){}

  ngOnInit() {
    this.ProyectoServices.loadP().subscribe((res:any)=>{
      res.forEach((elem:any) => {
        let temp= new Proyecto()
        temp.set(elem)
        this.proyectosm.push(temp)
        
      });
    })
    
    
    
  }
  Onproyectos(item: Proyecto){
    this.items.proyecto = item.id
  }
}
