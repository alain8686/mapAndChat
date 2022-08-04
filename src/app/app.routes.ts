import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserResolver } from './components/user/user.resolver';
//import {ChatroomComponent} from './components/chatroom/chatroom.component';

import { AuthGuardService } from './services/auth-guard.service';
import{ ProfilesService } from './services/profiles.service';


const appRoutes: Routes = [

     { path: '',    redirectTo: '/app',    pathMatch: 'full',  }, 
     {  
         path: 'login', 
         loadChildren: './components/login/login.module#LoginModule',
    },
     { 
         path: 'app', 
         canLoad: [AuthGuardService],
         resolve: { data: UserResolver},
         loadChildren: './components/user/user.module#UserModule',  
    },
    

];

export const AppRoutes = RouterModule.forRoot(appRoutes,{ useHash: true });

//export const AppRoutes = RouterModule.forRoot(appRoutes);