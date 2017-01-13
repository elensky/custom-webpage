import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'instagram',
  template: require('./instagram.html')
})
export class InstagramComponent {
  photos: [any];

  constructor () {
    this.photos = ['2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '2871', '3016'];
  }
}
