import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-updater',
  templateUrl: './product-updater.component.html',
  styleUrls: ['./product-updater.component.css']
})
export class ProductUpdaterComponent implements OnInit {
  @Input()
  price: number;
  @Output()
  update = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  updatePrice() {
    this.update.emit(this.price)
  }
}
