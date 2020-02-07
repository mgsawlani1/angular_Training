import { Component, OnInit } from '@angular/core';
import {Person} from './Person';
import { UserService } from '../users/user.service';
@Component({
    selector:'app-signupform',
    templateUrl: 'signupform.component.html',
    
})
export class SignUpFormComponent  {
    person:Person = {
            name : 'James',             
            phone:"12345",
            address:'India'
        
    }
    constructor(private service:UserService){

    }
    postForm(){
      
        this.service.postUsers(this.person).subscribe(response=>{
            alert("form submitted");
        });
    }
 
}