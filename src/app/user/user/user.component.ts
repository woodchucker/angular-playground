import { UserService } from './../../services/user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export interface IUser {
  name: 'Mario' | 'Ale' | 'Paolo',
  surname: string;
  id: number
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  helloText = '';
  users: Array<IUser> = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.userList()
      .subscribe(users => this.users = users);
  }
  sayHello(event: MouseEvent) {
    this.helloText = 'Hello world'
    console.log(event.target)
  }
  goToUserDetail(id: number) {
    this.router.navigate(['/user', id.toString()])
  }

}
