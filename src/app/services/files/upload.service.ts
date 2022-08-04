import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  domain:string = "http://localhost:3000";
  filesToUpload: Array<File> = [];
  showFileError:any;

  constructor(private http:HttpClient) { }

  uploadFile(event){
    const files = event.target.files;
    console.log('Uploading file...', files);

    if (files.length > 0) {
      let file;
      let formData = new FormData();
      formData.append('selectFile', files);
     /* for (let i = 0; i < files.length; i++) {
         file = files[i];
         formData.append('selectFile', file);
      }*/
      console.log('Form Data '+formData);
    this.http.post(`${this.domain}/app/files`, formData)
      .map(files => files)
      .subscribe(files => console.log('files', files))
    }    

  }
}
