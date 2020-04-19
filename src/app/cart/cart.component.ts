import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartAction } from './../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public cart = [];
  public totalQuantity: number;
  public cartSubscription: Subscription;
  imgUrl = "../../assets/images/";

  constructor(private cartStore: CartAction) {}

  removeProduct(product) {
    this.cartStore.removeFromCart(product)
  }

  checkout() {
    alert('Sorry! Checkout will be coming soon!')
  }

  getTotalQuantity() {
      let quantity: Array<number> = []
       let intQuantity: number
    this.cart.forEach((item, i) => {
        intQuantity = parseInt(item.quantity)
       quantity.push(intQuantity)
    })

    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)
  }

  ngOnInit() {
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
      this.getTotalQuantity()
    });
  }

  
}

