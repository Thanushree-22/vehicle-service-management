import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage implements OnInit {

  notificationsEnabled:
  boolean = true;

  darkMode:
  boolean = false;

  constructor() { }

  ngOnInit() {
  }

   toggleNotifications() {

    this.notificationsEnabled =
      !this.notificationsEnabled;
  }

toggleDarkMode(event: any) {
  console.log('Dark mode changed');

  this.darkMode =
    event.detail.checked;

  document.body.classList.toggle(
    'dark',
    this.darkMode
  );
}

}
