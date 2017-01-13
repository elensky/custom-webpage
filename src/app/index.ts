import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {ModalModule} from 'ng2-bootstrap/modal';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {PageComponent} from './page';
import {VideoModalComponent} from './video_modal';
import {ContactComponent} from './contact';
import {AboutComponent} from './about';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig})
  ],
  declarations: [
    PageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    VideoModalComponent,
    ContactComponent,
    AboutComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
