import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ValidateService} from "../../services/validate.service";
import {AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {
  selectedOption: String;
  totalques:any;
  onButton:boolean= false;
  options = [
    { name: "Java", value: 1 },
    { name: "C Programming", value: 2 },
    { name: "AngularJs", value: 3 },
    { name: "NodeJs", value: 4 }
  ];
  //for addquestion loop
  i=0;

  question:String;
  optionA:String;
  optionB:String;
  optionC:String;
  optionD:String;
  answer:String;

  constructor(private router:Router,
              private validateService:ValidateService,
              private authService: AuthService ) { }

  ngOnInit() {
  }

onClick()
{
  if(!this.validateService.validateTest(this.totalques)){
    alert('Please fill valid input');
    return false;
  }
else{
    this.onButton=true;
  }
}

onSubmit(){
  const question={
    question: this.question,
    optionA: this.optionA,
    optionB: this.optionB,
    optionC: this.optionC,
    optionD: this.optionD,
    answer: this.answer
  }
  if(!this.validateService.validateQuestion(question)){
    alert('Please Fill in the details');
    return false;
  }
  this.authService.addQuestion(question).subscribe(data =>{
    if (data.success){
      alert('Added Successfully');
      this.i+=1;
    }
    else{
      alert('Something went wrong');

    }
  })

}





}
