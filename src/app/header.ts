import {Component} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';


@Component({
  template: require('./header.html')
})
export class HeaderComponent {

  constructor(private uiRouter: UIRouter) {}

  isShownMainLogo() {
    return this.uiRouter.globals.current.name != 'page.main';
  }
}
