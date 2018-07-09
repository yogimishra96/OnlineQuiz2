import { Component, OnInit } from '@angular/core';
import{ AuthService} from "../../services/auth.service";
import{Router} from "@angular/router";
import{ FlashMessagesService} from "angular2-flash-messages/module/flash-messages.service";
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

  constructor(private authService :AuthService,
              private flashMessage:FlashMessagesService,
              private router:Router,
              private validateService: ValidateService) { }

  ngOnInit() {
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
        this.router.navigate(['dashboard'])
      }
      else{
        this.router.navigate(['home'])

      }

    });
  }

  // --------------------------------------------------------REGISTER--------------------------------------------
  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      password: this.password
    }
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in the details',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    if(!this.validateService.validatePassword(user.password)){
      this.flashMessage.show('Please enter valid password',{cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

//register
    this.authService.registerUser(user).subscribe(data =>{
      if (data.success){
        this.flashMessage.show('Successfully Register',{cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/home']);
      }
      else{
         this.flashMessage.show('Something went wrong',{cssClass: 'alert-danger', timeout: 3000});

      }

    })


  }


  onLogoutClick(){
    const log= this.authService.logout();

    if (log) {
      // this.flashMessage.show('You are Logged Out',{
      //   cssClass: 'alert-success',
      //   timeout: 3000});
      this.router.navigate(['/login']);
      return false;
    }

  }

}
