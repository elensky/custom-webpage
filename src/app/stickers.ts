import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Sticker} from './sticker';
import * as _ from 'lodash';


@Component({
  selector: 'stickers',
  template: require('./stickers.html')
})
export class StickersComponent {
  stickers: [Sticker];
  filterTags: string[] = [];

  constructor(http: Http) {
    http.get('stickers.json?' + _.random(10000))
      .map(res => res.json())
      .subscribe(stickers => this.stickers = stickers);
  }

  setFilterTags(tags: [string]) {
    // clear stickers to force masonry library to clear items
    let stickersShelf = this.stickers;
    this.stickers = null;
    setTimeout(() => this.stickers = stickersShelf);

    this.filterTags = tags;
  }
}
