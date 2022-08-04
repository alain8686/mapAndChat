import { Injectable } from '@angular/core';
import {CanLoad, Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';


@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canLoad(): Promise<boolean>{
    let router = this.router;
    return new Promise((resolve) => {
      this.userService.getCurrentUser()
      .then(user => {
        console.log("puede entrar"); 
        return resolve(true);
      }).catch(function() {
        console.log("no puede entrar");
        router.navigate(['/login']);
        return resolve(true);
      });
    });
  }

}