import { Component, Input, OnInit } from '@angular/core';
import {
  Location
}
from '@angular/common';

import { Router }
from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent  implements OnInit {

  @Input()
  title: string = '';
   @Input()
  showBackButton:
  boolean = false;

  @Input()
showSettings:
boolean = false;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {}

  goBack() {

    this.location.back();
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}
