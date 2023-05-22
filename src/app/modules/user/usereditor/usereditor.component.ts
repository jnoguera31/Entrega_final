import { ItemsService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/class/items';


@Component({
  selector: 'app-usereditor',
  templateUrl: './usereditor.component.html',
  styleUrls: ['./usereditor.component.sass']
})
export class UsereditorComponent implements OnInit{
  public items: Items = new Items
  constructor(
  private ItemsService : ItemsService,
  public route: Router
  ){}


  ngOnInit() {}

  Onsave(){
    this.ItemsService.createP(this.items).subscribe(()=>{
      this.route.navigate(['/home'])
    })
  }
}
