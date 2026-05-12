import { Component,Input, OnInit } from '@angular/core';

import {
  Output,
  EventEmitter
}
from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
  standalone: false
})
export class StatsCardComponent  implements OnInit {

   @Input()
  title: string = '';

  @Input()
  value: string = '';

  @Input()
  icon: string = '';

  @Input()
  colorClass: string = '';

  @Output()
  cardClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}


  onCardClick() {

    this.cardClick.emit();
  }
}
