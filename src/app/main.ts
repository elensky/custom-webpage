import {Component} from '@angular/core';

@Component({
  selector: 'custom-crew-app',
  template: require('./main.html')
})
export class MainComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
