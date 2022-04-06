import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserComponent } from './user/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserDetailComponent
  },
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
