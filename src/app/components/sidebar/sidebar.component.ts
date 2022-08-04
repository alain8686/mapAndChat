import { Component,Input, OnInit } from '@angular/core';
import{ProfilesService} from '../../services/profiles.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  profiles:any;
  @Input() message: string;
  constructor(private profileService:ProfilesService) {    
  
   }

   ngOnInit() {
   this.getProfiles();   
  }
   
   getProfiles():void{
    this.profileService.getProfiles().subscribe(res=>{
      this.profiles = res;  
      //console.log('Test');   
      });
   }  

}
