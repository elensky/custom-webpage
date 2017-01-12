import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {PageComponent} from './page';

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'page.main',
    url: '/',
    component: MainComponent
  },
  {
    name: 'page',
    abstract: true,
    views: {
      $default: {
        component: PageComponent
      },
      'header@page': {
        component: HeaderComponent
      }
    }
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('page.main');
  }
}
