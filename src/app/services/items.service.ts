import { Injectable } from '@angular/core';
import { Items } from '../class/items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private http: HttpClient
  ) { }

  createP(dataI: Items){
    return this.http.post('http://localhost:3000/items' , dataI);
   }
   loadP(){
    return this.http.get('http://localhost:3000/items');
   }
}
