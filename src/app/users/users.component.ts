import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
 
})
export class UsersComponent implements OnInit {
userList:any;
  constructor(private service:UserService) {

   }

  ngOnInit() {
    this.service.getUsers().subscribe(Users=>{
      this.userList = Users;
    })
  }

}
