import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";

 @Injectable()
export class AuthService {
  authToken:any;
  user:any;


  constructor(private http: HttpClient ) { }

  registerUser(user){
    let header= new HttpHeaders();
    header.append('Content-Type','application/json');
    return this.http.post('http://localhost:8000/users/register',user,{headers:header})
      .pipe(map((res: any) => {
        console.log('res', res);
        return res;
      }));


  }
    authenticateUser(user){
     let header= new HttpHeaders();
      header.append('Content-Type','application/json');
       return this.http.post('http://localhost:8000/users/authenticate',user,{headers:header})
         .pipe(map((res: any) => {
           console.log('res', res);
           return res;
         }));


}

  getProfile(){
  let header= new HttpHeaders();
  // this.loadToken();
  // console.log(this.authToken);
  header.append('Authorization',localStorage.getItem('id_token'));
  header.append('Content-Type','application/json');
  return this.http.get('http://localhost:8000/users/profile',{headers:header})
    .pipe(map((res: any) => {
      return res;
    }));
}

storedUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user= user;

}

loadToken(){
    const token = localStorage.getItem('id.token');
    this.authToken=token;
}


logout(){
    this.authToken=null;
    this.user =null;
    localStorage.clear();
    return true;
 }
 }
