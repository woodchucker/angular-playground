import { IUser } from './../user/user/user.component';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  userList(): Observable<Array<IUser>> {
    let users: Array<IUser> = [
      {
        name: 'Mario',
        surname: 'Rossi',
        id: 1
      },
      {
        name: 'Ale',
        surname: 'Del Piero',
        id: 2
      },
      {
        name: 'Paolo',
        surname: 'Val Verde',
        id: 3
      },
    ];
    return of(users);
  }
}
