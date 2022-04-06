import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  exports: [
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
