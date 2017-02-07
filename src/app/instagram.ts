import {Component} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'instagram',
  template: require('./instagram.html')
})
export class InstagramComponent {
  photos: any[] = [];
  private params: URLSearchParams = new URLSearchParams();
  finished: boolean;

  constructor (private _jsonp: Jsonp) {
    this.params.set('access_token', '4489516260.e6dce12.a724dda10bf147bc914ce971e4f9223f');
    this.params.set('callback', 'JSONP_CALLBACK');
    this.params.set('count', '14');
    this.getMore();
  }

  getMore() {
    this._jsonp
      .get('https://api.instagram.com/v1/users/self/media/recent/',  {search: this.params})
      .map(res => res.json())
      .subscribe(response => {
        this.photos = this.photos.concat(response.data);
        if (response.pagination.next_max_id) {
          this.params.set('max_id', response.pagination.next_max_id);
        } else {
          this.finished = true;
          console.log(this.finished);
        }
      });
  }

}
