import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: any;
  public errorMsg;
  public selectedId;
  imgUrl = "../../assets/images/";

  authRequest:any={
		"username":"frank",
      "password":"password"
    };
    
  constructor(private _service: ApiService, private _router: Router, private _route: ActivatedRoute) {
   }

  ngOnInit() {
    this.accessAPI()
  }

   public accessAPI(){
     console.log(this._service.token);     
    let resp=this._service.carlist();
     resp.subscribe(data => { this.cars = data;
      this.cars = JSON.parse(this.cars);
           console.log('çarlist', this.cars)});
    }

  onSelect(car) {
    this._router.navigate(['/carList', car._id]);
  }

  isSelected(car) {
    return car._id === this.selectedId;
  }

}

