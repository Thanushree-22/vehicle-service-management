import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
  standalone: false
})
export class EmptyStateComponent  implements OnInit {
   @Input()
  title: string = 'No Data Found';

  @Input()
  subtitle: string = 'Nothing available currently';

  constructor() { }

  ngOnInit() {}

}
