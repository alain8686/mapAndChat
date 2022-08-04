export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;
  email:String;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
    this.email = "";
  }
}
