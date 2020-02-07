import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {
    subject = new Subject<string>();
    setUserName(name: string) {
        this.subject.next(name);
    }
    getUserName(): Observable<string> {
        return this.subject.asObservable();
    }
}