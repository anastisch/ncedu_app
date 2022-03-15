import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CoffeeShop } from 'src/app/model/coffee-shop';
import { getCoffeeShopsResponse } from 'src/app/model/getCoffeeShopsresponse';

@Injectable({
  providedIn: 'root'
})
export class CoffeeShopService {

  COFFEE_SHOP_URL: string = "../assets/db.json";

  constructor(private httpClient: HttpClient) { }

  getCoffeeShops() :Observable<CoffeeShop[]> {
    return this.httpClient.get<getCoffeeShopsResponse>(this.COFFEE_SHOP_URL).pipe(
      map( (resp) => 
        {
          console.log(resp.data);
          return resp.data;
        })
    );
  }
}
