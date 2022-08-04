import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';

/*Services*/
import{ProfilesService} from './services/profiles.service';
import{AuthService} from './services/auth.service';
import{AuthGuardService} from './services/auth-guard.service';
import{UserService} from './services/user.service';

/*Module Firebase*/
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
//import * as firebase from 'firebase';

import {LoginModule} from './components/login/login.module';



/*Services Maps*/
//import { LayoutModule } from '@angular/cdk/layout';
//import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { UserResolver } from './components/user/user.resolver';

//import{UserModule} from './components/user/user.module';

import {AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{GeolocationService} from './services/geolocation.service';


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes,    
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpModule,   
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    }),
    BrowserAnimationsModule,
    AgmJsMarkerClustererModule,

    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    //LoginModule,

    /*MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule, */
   // UserModule
  ],
  //exports:[ChatComponentComponent],
  providers: [AuthService, AuthGuardService,ProfilesService,UserResolver,UserService,GeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
