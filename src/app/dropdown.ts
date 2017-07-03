import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'custom-dropdown',
  template: require('./dropdown.html')
})

export class CustomDropdownComponent {
  @Input() address: Address;
  public city;
  allAddresses: [CityAddresses];

  public setCity = (city) => {
    if (this.city === city) { return; }
    this.city = city;
  };

  constructor (http: Http) {
    this.city = 'Minsk';

    http.get('offline_shops.json')
      .map(res => res.json())
      .subscribe(allAddresses => this.allAddresses = allAddresses);
  }
}

export class CityAddresses {
  name: string;
  addresses: [Address];

  constructor(name: string, addresses: [Address]) {
    this.name = name;
    this.addresses = addresses;
  }
}

export class Address {
  name: string;
  description: string;
  address: string;

  constructor(name: string, description: string, address: string) {
    this.name = name;
    this.description = description;
    this.address = address;
  }
}
