import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from './../service/api.service';
import { ICar } from '../car';
import { CartAction } from './../store/actions/cart.actions';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetails :any;
  public errorMsg;
  carId;
  carMake;
  quantity: number;
  imgUrl = "../../assets/images/";
  isAdded: boolean;

  authRequest:any={
		"username":"frank",
    "password":"password"
    };
    
    response:any;
  constructor(private _service: ApiService, private _route: ActivatedRoute, private _router: Router, private cartStore: CartAction) {               
   }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('_id'));
      this.carId = id;
     this.getCarInfo(this.carId);
    });
  }

// Function to get car details from service based on id
  getCarInfo(id) {
    this._service.getCarDetails(id)
          .subscribe(data => {this.carDetails = data;
           this.carDetails = JSON.parse(this.carDetails);
            console.log('cardetails', this.carDetails);},
                    error => this.errorMsg = error);
                   
}
 //When add to cart button is clicked
 addToCart(carDetails) {
  // this.productService.addToCart(product)
  console.log('addToCart',this.carDetails)
  this.cartStore.addToCart(carDetails, this.quantity || 1);
  this.isAdded = true;
}

  goPrevious() {
    let previousId = this.carId - 1;
    this._router.navigate(['/carList', previousId]);
    this.isAdded = false;
  }

  goNext() {
    let nextId = this.carId + 1;
    this._router.navigate(['/carList', nextId]);
    this.isAdded = false;
  }

  GoToCarList() {
    console.log('AddCardDtails', this.carDetails)
    let selectedId = this.carId ? this.carId : null;
    this._router.navigate(['/carList', {_id: selectedId}]);
  }

  
}
