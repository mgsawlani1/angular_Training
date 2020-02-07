import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;
  constructor(private auth:AuthService) {
    this.auth.getUserName().subscribe(newname=>{
      this.username=newname;
    })
   }

  ngOnInit() {
  }

}
