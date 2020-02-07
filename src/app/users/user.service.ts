import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(private http:HttpClient){

    }
    getUsers():Observable<any>{
        return this.http.get('http://jsonplaceholder.typicode.com/users');
    }
    postUsers(userObj:any){
       return this.http.post('http://jsonplaceholder.typicode.com/users',{user:userObj} )
    }
}