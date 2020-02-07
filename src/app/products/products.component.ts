import { Component, OnInit, Inject } from '@angular/core';
import { Product } from './product';
import { DataService } from '../data.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //providers : [{provide:DataService, useClass:DataService}]
 // providers : [DataService]
})
export class ProductsComponent implements OnInit {
productList:Array<Product>
isAdmin:Boolean =true;

 // constructor(@Inject('DataService') service) {
  constructor(service:DataService) {
    //let service = new DataService();
    this.productList =  service.getProducts();   
   }
   setNewprice(value,i){
     this.productList[i].price=value
   }

   deleteItem(index:number){
     alert("hi");
     this.productList.splice(index,1)
   }
   validate(value){
     console.log("validate", value)
   }
  ngOnInit() {
  }

}
