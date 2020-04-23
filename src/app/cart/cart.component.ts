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

  ngOnInit() {
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
     });
  }

  
}

