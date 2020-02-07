import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userid:number;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(routeParams=>{
      this.userid = routeParams['id']
    })
  }

}
