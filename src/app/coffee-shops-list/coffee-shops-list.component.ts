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

    coffeeShopDetails!: FormGroup;

    coffeeShopObj!: CoffeeShop;

  constructor(private formBuilder: FormBuilder, public coffeeShopService: CoffeeShopService) { }

  ngOnInit(): void {
    this.coffeeShopDetails = this.formBuilder.group({
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
    this.coffeeShopObj = new CoffeeShop(
                              this.coffeeShopDetails.value.coffeeShopName,
                              this.coffeeShopDetails.value.desc);
    this.coffeeShops.push(this.coffeeShopObj);
    console.log(this.coffeeShops);
  }

  editCoffeeShop(coffeeShop: CoffeeShop) {
    this.coffeeShopDetails.controls['coffeeShopName'].setValue(coffeeShop.coffeeShopName);
    this.coffeeShopDetails.controls['desc'].setValue(coffeeShop.desc);
  }

  getPrevCoffeeShopBy(name: string) {
    var i = 0;
    while (i < this.coffeeShops.length) {
      if (name == this.coffeeShops[i].coffeeShopName) {
        return this.coffeeShops[i];
      }
    }
    return null;
  }

  updateCoffeeShop() {
    var i = 0;
    while (i < this.coffeeShops.length) {
      if (this.coffeeShopObj.coffeeShopName == this.coffeeShops[i].coffeeShopName) {
        this.coffeeShops[i].coffeeShopName = this.coffeeShopDetails.value.coffeeShopName;
        this.coffeeShops[i].coffeeShopName = this.coffeeShopDetails.value.desc;
      }
      i++;
    }

    this.coffeeShopObj.coffeeShopName = this.coffeeShopDetails.value.coffeeShopName;
    this.coffeeShopObj.desc = this.coffeeShopDetails.value.desc;

    console.log(this.coffeeShops);
  }

}
