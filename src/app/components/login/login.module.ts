import {Routes, RouterModule} from '@angular/router'; 
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {LoginComponent} from "./login.component"; 

//import{AuthService} from '../../services/auth.service';




const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NgbModule,
    RouterModule.forChild(routes),
  ], 
  providers: [/*AuthService*/],
})
export class LoginModule { }