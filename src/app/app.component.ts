import { Component, OnInit, OnDestroy } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Logout', url: '/logout', icon: 'log-out' },
    { title: 'Register', url: '/register', icon: 'person-add' },
    { title: 'Users', url: '/users', icon: 'people' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private StatusBar: StatusBar,
    private SplashScreen: SplashScreen


  ) {}
}
