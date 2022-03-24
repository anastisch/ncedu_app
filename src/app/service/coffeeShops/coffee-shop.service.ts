import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { getCoffeeShopsResponse } from 'src/app/dto/getCoffeeShop/getCoffeeShopsResponse';
import { CoffeeShop } from 'src/app/model/coffeeShop/coffee-shop';
import { CoffeeShopSummary } from 'src/app/model/coffeeShopSummary/coffee-shop-summary';


@Injectable({
  providedIn: 'root'
})
export class CoffeeShopService {

  COFFEE_SHOP_URL: string = "http://localhost:3000/coffeeShops";

  constructor(private httpClient: HttpClient) { }

  getCoffeeShop(id: number): Observable<CoffeeShop> {
    return this.httpClient.get<CoffeeShop>(this.COFFEE_SHOP_URL + "/" + id);
  }

  getCoffeeShops(): Observable<CoffeeShopSummary[]> {
    return this.httpClient.get<CoffeeShopSummary[]>(this.COFFEE_SHOP_URL).pipe(
      map( (resp) => 
        {
          console.log(resp);
          return resp;
        })
    );
  }

  addCoffeeShop(coffeeShop: CoffeeShop): Observable<any> {
    return this.httpClient.post(this.COFFEE_SHOP_URL, coffeeShop);
  }

  updateCoffeeShop(coffeeShop: CoffeeShop): Observable<any> {
    return this.httpClient.put(this.COFFEE_SHOP_URL + "/" + coffeeShop.id, coffeeShop);
  }

  deleteCoffeeShop(id: number): Observable<any> {
    return this.httpClient.delete(this.COFFEE_SHOP_URL + "/" + id);
  }
}
