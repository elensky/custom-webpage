import {Component} from '@angular/core';

@Component({
  selector: 'sticker',
  template: require('./sticker.html')
})
export class StickerComponent {

}

export class Sticker {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
