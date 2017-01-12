import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {PageComponent} from './page';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig})
  ],
  declarations: [
    PageComponent,
    MainComponent,
    HeaderComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
