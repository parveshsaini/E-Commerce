import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Cart = {items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Sneakers',
    price: 111,
    quantity: 1,
    id: 1,
  }]};

  dataSource: Array<CartItem> = [];
  displayColumns: Array<String> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(){

  }
  ngOnInit(): void {
    this.dataSource= this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items.map((item) => {
      return item.price * item.quantity; 
    }).reduce((prev, current) => prev + current, 0);
  }
  


}
