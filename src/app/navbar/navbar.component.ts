import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartAction } from './../store/actions/cart.actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public cart = [];
  shoppingCount:number;
  public totalQuantity: number;
  public cartSubscription: Subscription;
  constructor(private cartStore: CartAction) { }

  ngOnInit(): void {
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
      this.getTotalQuantity()
    });
  }

  //function to get the Quantity of selected cars
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
}
