import {Component, Input} from '@angular/core';

@Component({
  selector: 'sticker',
  template: require('./sticker.html')
})
export class StickerComponent {
  @Input() sticker: Sticker;
}

export class Sticker {
  id: string;
  name: string;
  image: string;
  size: string;

  constructor(id: string, name: string, image: string, size: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.size = size;
  }
}
