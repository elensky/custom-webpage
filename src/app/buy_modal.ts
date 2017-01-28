import {Component, ViewChild, ElementRef} from '@angular/core';

import {Sticker} from './sticker';

@Component({
  selector: 'buy',
  template: require('./buy_modal.html'),
  inputs: ['sticker']
})

export class BuyModalComponent {
  @ViewChild('buyModal') modal: ElementRef;

  isOnline: boolean;
  isOffline: boolean;
  isSticker: boolean;
  sticker: Sticker;

  constructor (isOnline: boolean, isOffline: boolean, isSticker: boolean) {
    this.isOnline = isOnline;
    this.isOffline = isOffline;
    this.isSticker = isSticker;
    this.isOffline = false;
  }
  showOffline = function () {
    this.isSticker = false;
    this.isOnline = false;
    this.isOffline = true;
    this.modal.show();
  };
  showOnline = function () {
    this.isOnline = true;
    this.isOffline = false;
    this.isSticker = false;
    this.modal.show();
  };
  showSticker = function () {
    this.isSticker = true;
    this.isOnline = false;
    this.isOffline = false;
    this.modal.show();
  }
}
