import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/class/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-rproyecto',
  templateUrl: './rproyecto.component.html',
  styleUrls: ['./rproyecto.component.sass']
})
export class RproyectoComponent implements OnInit {
  public regpro: Proyecto = new Proyecto();
  public tituloValido = false;

  constructor(
    private proyectoService: ProyectoService,
    public route: Router
  ) {}

  ngOnInit() {}

  validarTitulo() {
    if (this.regpro.titulo && this.regpro.titulo.length >= 10) {
      this.tituloValido = true;
    } else {
      this.tituloValido = false;
    }
  }

  Onsave() {
    if (this.regpro.titulo && this.regpro.descripcion && this.tituloValido) {
      this.proyectoService.createP(this.regpro).subscribe(() => {
        this.route.navigate(['/user']);
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  volverAtras() {
    this.route.navigate(['/user']);
  }
}
