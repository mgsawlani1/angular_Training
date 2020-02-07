import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  productList:Array<Product>

  constructor(service:DataService) {
    this.productList =  service.getProducts();   

   }

  ngOnInit() {
  }

}
