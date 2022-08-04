import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ProfilesService {
 // domain:string = "https://webgoblob.herokuapp.com";  
 // domain:string = "http://localhost:3000";
 domain:string = "http://upera.tv:3000"; 

  constructor(private http:HttpClient) { }


  //get Profile
  getProfiles(){
    return this.http.get(`${this.domain}/app/profiles`)
    .map(res=>res)   
  }

 

}
