import {Component, Input} from '@angular/core';

@Component({
  selector: 'sticker',
  template: require('./sticker.html')
})
export class StickerComponent {
  @Input() sticker: Sticker;

  getStickerBlockSizeClass() {
    let sizeClass = '';
    if (this.sticker.config) {
      if (this.sticker.config.vSize) {
        sizeClass += ' v-size-' + this.sticker.config.vSize;
      }
      if (this.sticker.config.hSize) {
        sizeClass += ' h-size-' + this.sticker.config.hSize;
      }
    }
    return sizeClass;
  }
}

export class Sticker {
  id: string;
  name: string;
  image: string;
  size: string;
  config: Config;

  constructor(id: string, name: string, image: string, size: string, config: Config) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.size = size;
    this.config = config;
  }
}

class Config {
  vSize: number;
  hSize: number;

  constructor(vSize: number, hSize: number) {
    this.vSize = vSize;
    this.hSize = hSize;
  }
}
