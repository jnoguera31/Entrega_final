import { Proyecto } from 'src/app/class/proyecto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(
    private http: HttpClient
  ) {}
   createP(dataP: Proyecto){
    return this.http.post('http://localhost:3000/proyecto' , dataP);
   }
   loadP(){
    return this.http.get('http://localhost:3000/proyecto');
   }
   
}
