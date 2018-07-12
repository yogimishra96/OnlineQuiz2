import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  validateRegister(user){
    if(user.name==undefined||user.email==undefined||user.password==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  validateEmail(email) {
    const re = /^[\w.+\-]+@(gmail|yahoo|hotmail|outlook)\.com$/;
    return re.test(email);
  }


  validatePassword(password) {
    const re = /^[A-Za-z0-9]{8,15}$/;
    return re.test(password);
  }

  validateTest(question) {
    const re = /^[0-9]{1,3}$/;
    return re.test(question);
  }
}
