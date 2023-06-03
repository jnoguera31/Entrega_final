import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/class/items';
import { Proyecto } from 'src/app/class/proyecto';
import { ItemsService } from 'src/app/services/items.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public proyectosm: Proyecto[] = [];
  public items: Items = new Items();
 
  
  constructor(
    
    private proyectoService: ProyectoService,
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.proyectoService.loadP().subscribe((res: any) => {
      res.forEach((elem: any) => {
        let temp = new Proyecto();
        temp.set(elem);
        this.proyectosm.push(temp);
      });
    });
  }

  Onproyectos(item: Proyecto) {
    this.items.proyecto = item.id;
    this.resetForm();
  }

  Onsave() {
    this.itemsService.createItem(this.items).subscribe(() => {
      this.resetForm();
      this.router.navigate(['/user']);
    });
  }

  resetForm() {
    this.items.introduccion = '';
    this.items.desarrollo = '';
    this.items.conclusion = '';
  }
}