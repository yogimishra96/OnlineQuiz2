import { Component, OnInit } from '@angular/core';
import{ AuthService} from "../../services/auth.service";
import{Router} from "@angular/router";
import {ValidateService} from "../../services/validate.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:String;
  email:String;
  password:String;
  cnfPassword:String;
  html:any;
  buttons:any;
  constructor(private authService :AuthService,
              private router:Router,
              private validateService: ValidateService) { }


  ngOnInit(){
    // this.authService.loadToken();
    // if(this.authService.authToken!= null) {
    //   this.html='<span>'
    //   this.html += '<button mat-button (click)="onLogoutClick()" class="logout"><b>Logout</b></button>';
    //
    //   this.html+='</span>'
    //   document.getElementById('sideButton').innerHTML = this.html;
    // }
    // else{
    //   this.html='<span>'
    //   this.html += '<a data-toggle="modal" data-target="#sign"><b>Sign In|</b></a>';
    //   this.html+= '<a  data-toggle="modal" data-target="#register"><b>Register </b></a>'
    //   this.html+='</span>'
    //   document.getElementById('sideButton').innerHTML = this.html;
    // }


  }

  //-------------------------------------- LOGIN----------------------------------------------------------
  onLoginSubmit(){
    const user={
      email: this.email,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data=>{
      if (data.success){
        this.authService.storedUserData(data.token, data.user)
        console.log(data.user.roleid);
        alert('Welcome '+data.user.name);
        if(data.user.roleid== '1'){
          this.router.navigate(['admindash'])
        }
        else {
          this.router.navigate(['dashboard'])
        }
      }
      else{
        alert('Id password donot matched');
        this.router.navigate(['home'])

      }

    });
  }

  // --------------------------------------------------------REGISTER--------------------------------------------
  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      password: this.password,
      cnfPassword: this.cnfPassword
    }
    if(!this.validateService.validateRegister(user)){
      alert('Please Fill in the details');
      return false;
    }


    if(!this.validateService.validateEmail(user.email)){
      alert('Please enter valid email');
      return false;
    }


    if(!this.validateService.validatePassword(user.password)){
      alert('Password should contain at least 8 characters');
      return false;
    }

    if(!this.validateService.validateCnfPassword(user.password,user.cnfPassword)){
      alert('Password and confirm password should be same');
      return false;
    }


//register
    this.authService.registerUser(user).subscribe(data =>{
      if (data.success){

        this.router.navigate(['/home']);
      }
      else{
        alert('Something went wrong');

      }
    })
  }

  onLogoutClick(){
    const log= this.authService.logout();
    if (log) {
      this.router.navigate(['/home']);
      return false;
    }
  }
  onLoginClick(){
      this.router.navigate(['/home']);

  }

}
