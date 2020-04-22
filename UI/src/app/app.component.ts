import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { navigation } from './navigation';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router, Event, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  navLists: Array<object> = navigation;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef:
    ChangeDetectorRef, media: MediaMatcher,
    private router: Router) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
