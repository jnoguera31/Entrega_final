import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private http: HttpClient,
    private route: Router,  private ngZone: NgZone) { }

  login(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);

      if (user) {
        // Usuario autenticado correctamente
        console.log('Inicio de sesión exitoso');
        this.errorMessage = '';
        this.route.navigate(['/user']);
      } else {
        // Credenciales inválidas, muestra un mensaje de error
        console.log('Credenciales inválidas');
        this.errorMessage = 'Credenciales inválidas';
        this.ngZone.run(() => {
          window.alert('Credenciales inválidas');
          this.username = ''; // Dejar en blanco el campo de nombre de usuario
          this.password = ''; // Dejar en blanco el campo de contraseña
        });
      }
    });
  }
}
