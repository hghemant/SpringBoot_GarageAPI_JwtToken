import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ICar } from './../car'
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    // private _carListUrl: string = "http://localhost:8080/getallcar";
    private _carDetailsUrl: string = "http://localhost:8080/getallcar?_id=";
    public token;
    constructor(private http: HttpClient) { }

    //Service to reterive the car based on Id.
    getCarDetails(id) {
        let tokenStr = 'Bearer ' + this.token;
        const headers = new HttpHeaders().set("Authorization", tokenStr)
        return this.http.get("http://localhost:8080/getallcar/"+id, { headers, responseType: 'text' as 'json' });
    }


    //Genrate  the Token to Authenticate the user(Frank)
        public genrateToken(request) {
        return this.http.post("http://localhost:8080/authenticate", request, { responseType: 'text' as 'json' });
    }


    //Function to get all the Cars.
    public carlist() {
        console.log('service token ', this.token);
        let tokenStr = 'Bearer ' + this.token;
        const headers = new HttpHeaders().set("Authorization", tokenStr)
        return this.http.get("http://localhost:8080/getallcar", { headers, responseType: 'text' as 'json' })
    }
    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}