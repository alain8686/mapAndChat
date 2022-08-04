import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import {MouseEvent} from '@agm/core';
import {Observable} from 'rxjs/Observable';
import {AgmJsMarkerClustererModule} from '@agm/js-marker-clusterer';

import{ProfilesService } from '../../services/profiles.service';

/*Geo Location Service*/
import{GeolocationService} from '../../services/geolocation.service';

interface Marker{
  lat:number;
  lng: number;
  label?: string;
  draggable?:boolean;
}
declare var $ :any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent  {
  title: string;
  lat: number;
  lng: number;
  zoom:number;
  profiles:any;  
  currentLocation2:any;

  errorMsg: string;
   currentLocation: Coordinates = null

  constructor(private ref: ChangeDetectorRef,private geoLocationService: GeolocationService,private  profileService:ProfilesService){
    this.title = "App Goblob";                                                                                                             
    this.zoom = 10;

    
    /*this.lat =  -22.9867499;
    this.lng = -43.3103115;*/

    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.currentLocation2 = {
          'lng' : this.lng,
          'lat' :this.lat
        }
        console.log(this.currentLocation2);
      });
    }
   
  }

  ngOnInit() {
    //this.getProfiles();
    //this.searchByCurrent();
    
  }

  getProfiles():void{
     this.profileService.getProfiles().subscribe(res=>{
      this.profiles = res;  
      console.log(res);   
      });
  }

  searchByCurrent() { 
    console.log('Geolocation');
    let self = this;
    const accuracy = { enableHighAccuracy: true }; 
    self.geoLocationService.getLocation(accuracy).subscribe( function(position) {
    self.currentLocation = position; 
    self.ref.detectChanges();  
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    console.log("Latitude "+this.lat+"Longitude "+this.lng); 
    }, 
    function(error) {
       self.errorMsg = error; 
       self.ref.detectChanges(); 
      } );
    
  }

  
     
}
