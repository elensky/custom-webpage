import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {HttpModule} from '@angular/http';
import {ModalModule} from 'ng2-bootstrap/modal';
import {MasonryModule} from 'angular2-masonry';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {PageComponent} from './page';
import {StickersComponent} from './stickers';
import {StickerComponent} from './sticker';
import {VideoModalComponent} from './video_modal';
import {ContactComponent} from './contact';
import {AboutComponent} from './about';
import {ShopComponent} from './shop';
import {InstagramComponent} from './instagram';
import {BuyModalComponent} from './buy_modal';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ModalModule.forRoot(),
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig}),
    MasonryModule
  ],
  declarations: [
    PageComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    StickersComponent,
    StickerComponent,
    FooterComponent,
    VideoModalComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    InstagramComponent,
    BuyModalComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
