import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  registrarUsuario(usuario: any) {
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }
  
  obtenerUsuarios() {
    return this.http.get<any[]>('http://localhost:3000/usuarios');
  }
}
