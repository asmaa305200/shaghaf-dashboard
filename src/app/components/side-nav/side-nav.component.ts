import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  constructor(private _Renderer2: Renderer2, private _elmenetRef: ElementRef) { }
  toggle() {
    const sideNav = this._elmenetRef.nativeElement.querySelector('.over-all');
    if (sideNav) {
      if (sideNav.style.display === 'none') {
        this._Renderer2.setStyle(sideNav, 'display', 'block');
      } else {
        this._Renderer2.setStyle(sideNav, 'display', 'none');
      }       

    }
  }
}