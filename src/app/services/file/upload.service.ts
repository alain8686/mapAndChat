import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  domain:string = "http://localhost:3000"; 
  filesToUpload: Array<File> = [];

  constructor(private http:HttpClient) { }

  uploadFile(event){
    let fileList: FileList = event.target.files;
    const files: Array<File> = this.filesToUpload;
    if(fileList.length > 0){     
      let file: File = fileList[0];      
      let formData:FormData = new FormData();
      console.log('File here '+file.name);
      formData.append('uploadFile', file,file.name);
      let headers = new Headers();      

      return this.http.post(`${this.domain}/app/files`, formData)
      .map(file=>file)
      .subscribe(file => console.log('file Angular', file));
      //call to the api for saves file
      
    }
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server Error');
}
}
