import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'logo',
  template: require('./logo.html'),
  inputs: ['width', 'height', 'imgUrl']
})
export class LogoComponent {
  @ViewChild('canvas') parent: ElementRef;

  width: number;
  height: number;
  imgUrl: string;
  node: any;
  context: any;

  ngOnInit () {
    this.init();
  }

  createCanvas() {
    this.node = document.createElement('canvas');
    this.context = this.node.getContext('2d');
    this.node.width = this.width || 100;
    this.node.height = this.height || 100;
    this.parent.nativeElement.appendChild(this.node);
  }

  init() {
    this.createCanvas ();
    let ctx = this.context;
    let img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    img.src = this.imgUrl;
    // define a custom fillCircle method
    ctx.fillCircle = function(x, y, radius) {
      this.beginPath();
      this.moveTo(x, y);
      this.arc(x, y, radius, 0, Math.PI * 2, true);
      this.fill();
    };

    // bind mouse events
    this.node.onmousemove = function(e) {
      let x = e.layerX;
      let y = e.layerY;
      let radius = 15;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillCircle(x, y, radius);
    };
  }
}
