import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';
import {HttpModule} from '@angular/http';
import {JsonpModule} from '@angular/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MasonryModule} from 'angular2-masonry';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

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
import {DropdownComponent} from './dropdown';
import {BusinessComponent} from './business';
import {TagsPipe} from './tags_pipe';
import {LogoComponent} from './logo';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ModalModule.forRoot(),
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig}),
    MasonryModule,
    BsDropdownModule.forRoot()
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
    BuyModalComponent,
    DropdownComponent,
    BusinessComponent,
    TagsPipe,
    LogoComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
