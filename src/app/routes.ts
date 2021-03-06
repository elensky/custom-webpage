import {Injectable} from '@angular/core';
import {UIRouter, Ng2StateDeclaration} from 'ui-router-ng2';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {PageComponent} from './page';
import {ContactComponent} from './contact';
import {AboutComponent} from './about';
import {ShopComponent} from './shop';
import {BusinessComponent} from './business';

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
      },
      'footer@page': {
        component: FooterComponent
      }
    }
  },
  {
    name: 'page.shop',
    url: '/shop',
    component: ShopComponent
  },
  {
    name: 'page.about',
    url: '/about',
    component: AboutComponent
  },
  {
    name: 'page.contact',
    url: '/contact',
    component: ContactComponent
  },
  {
    name: 'page.business',
    url: '/business',
    component: BusinessComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('page.main');
  }
}
