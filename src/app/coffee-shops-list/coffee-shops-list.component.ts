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

    selectedCoffeeShop!: CoffeeShop;

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

  prepareAddForm() {
    this.coffeeShopDetails.controls['coffeeShopName'].setValue('');
    this.coffeeShopDetails.controls['desc'].setValue('');
  }

  addCoffeeShop() {
    let newCoffeeShop = new CoffeeShop(
                              this.coffeeShopDetails.value.coffeeShopName,
                              this.coffeeShopDetails.value.desc);
    this.coffeeShops.push(newCoffeeShop);
    console.log(this.coffeeShops);
  }

  prepareEditDeleteForm(coffeeShop: CoffeeShop) {
    this.selectedCoffeeShop = coffeeShop;
    this.coffeeShopDetails.controls['coffeeShopName'].setValue(coffeeShop.coffeeShopName);
    this.coffeeShopDetails.controls['desc'].setValue(coffeeShop.desc);
  }

  updateCoffeeShop() {
    this.selectedCoffeeShop.coffeeShopName = this.coffeeShopDetails.value.coffeeShopName;
    this.selectedCoffeeShop.desc = this.coffeeShopDetails.value.desc;

    console.log(this.coffeeShops);
  }


  deleteCoffeeShop() {
    let shopToDeleteIndex = this.coffeeShops.indexOf(this.selectedCoffeeShop)
    this.coffeeShops.splice(shopToDeleteIndex, 1);
  }

}
