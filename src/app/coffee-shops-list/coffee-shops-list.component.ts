import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoffeeShop } from '../model/coffee-shop';
import { CoffeeShopService } from '../service/coffeeShops/coffee-shop.service';

@Component({
  selector: 'app-coffee-shops-list',
  templateUrl: './coffee-shops-list.component.html',
  styleUrls: ['./coffee-shops-list.component.css']
})
export class CoffeeShopsListComponent implements OnInit {
    coffeeShops: Array<CoffeeShop> = [];

    newCoffeeShopDetails!: FormGroup;

  constructor(private formBuilder: FormBuilder, public coffeeShopService: CoffeeShopService) { }

  ngOnInit(): void {
    this.newCoffeeShopDetails = this.formBuilder.group({
      coffeeShopName: [''],
      desc: [''],
    })


    this.coffeeShopService.getCoffeeShops().subscribe(
      (response) => {
        console.log(response);
        this.coffeeShops = response;
      }
    )
  }

  addCoffeeShop() {
    this.coffeeShops.push(new CoffeeShop(
                              this.newCoffeeShopDetails.value.coffeeShopName,
                              this.newCoffeeShopDetails.value.desc));
    console.log(this.coffeeShops);
  }

}
