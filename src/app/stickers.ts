import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Sticker} from './sticker';

@Component({
  selector: 'stickers',
  template: require('./stickers.html')
})
export class StickersComponent {
  stickers: [Sticker];

  constructor(http: Http) {
    http.get('stickers.json')
      .map(res => res.json())
      .subscribe(stickers => this.stickers = stickers);
  }
}
