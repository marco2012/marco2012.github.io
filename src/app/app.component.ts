import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarLup';
  loading = false;

  constructor(private router: Router,
              private spinner: NgxSpinnerService) {
    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
      this.spinner.show();
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
      this.spinner.hide();
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
      this.spinner.hide();
    }
    if (event instanceof NavigationError) {
      this.loading = false
      this.spinner.hide();
    }
  }


}
