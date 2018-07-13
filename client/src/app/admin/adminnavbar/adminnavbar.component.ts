import { Component, OnInit } from '@angular/core';
import{ AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {
  user: Object;
  constructor(private authService :AuthService,
              private router:Router,) { }

  ngOnInit() {
    }
  onLogoutClick(){
    const log= this.authService.logout();

    if (log) {
      // this.flashMessage.show('You are Logged Out',{
      //   cssClass: 'alert-success',
      //   timeout: 3000});
      this.router.navigate(['/home']);
      return false;
    }

  }
}
