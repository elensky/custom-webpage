import {Component, ViewChild, ElementRef} from '@angular/core';
import {Sticker} from './sticker';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Address} from './dropdown';

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
  onlineAddresses: [Address];

  constructor (private http: Http) {}

  showModal = function (type: ModalMode) {
    this.mode = type;
    this.modal.show();
    if (!this.onlineAddresses) {
      this.http.get('online_shops.json')
        .map(res => res.json())
        .subscribe(onlineAddresses => this.onlineAddresses = onlineAddresses);
    }
  };
}
