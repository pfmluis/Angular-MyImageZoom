import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-zoom-test';

  public userInput;
  
  zoomAmount = 0.4;

  mouseIn(event) {
    let frame = document.getElementById('frame');
    let image = document.getElementById('imgtst');

    let imageTop = frame.offsetTop;
    let imageLeft = frame.offsetLeft;

    let marginX = frame.offsetWidth * this.zoomAmount;
    let marginY = frame.offsetHeight * this.zoomAmount;

    let mousePositionX = Math.abs(event.x - imageLeft);
    let mousePositionY = Math.abs(event.y - imageTop);

    let translationX = -mousePositionX*this.zoomAmount + marginX/2;
    let translationY = -mousePositionY*this.zoomAmount + marginY/2;

    image.style.transform = `scale(${1/(1-this.zoomAmount)}) translate(${translationX}px, ${translationY}px)`
  }

  mouseOut(event) {
    document.getElementById('imgtst').style.transform = `scale(1) translate(0px, 0px)`;
  }

  getInput() {
    let uiZoom = this.userInput / 100;
    this.zoomAmount = Math.max(0, Math.min(1, uiZoom));
  }

  zoomPlus() {
    this.zoomAmount = Math.max(0, Math.min(1, this.zoomAmount+0.05));
  }

  zoomMinus() {
    this.zoomAmount = Math.max(0, Math.min(1, this.zoomAmount-0.05));
  }
}
