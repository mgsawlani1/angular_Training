import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers : [DataService]
 providers : [AuthService]


})
export class AppComponent {
  title = 'demo-app';
}
