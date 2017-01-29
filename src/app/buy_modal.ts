import {Component, ViewChild, ElementRef} from '@angular/core';

import {Sticker} from './sticker';

enum ModalMode {
  online,
  offline,
  sticker
}
@Component({
  selector: 'buy',
  template: require('./buy_modal.html'),
  inputs: ['sticker']
})

export class BuyModalComponent {
  @ViewChild('buyModal') modal: ElementRef;
  sticker: Sticker;
  modalMode = ModalMode;
  public mode: ModalMode;

  showModal = function (type: ModalMode) {
    this.mode = type;
    this.modal.show();
  };
}
