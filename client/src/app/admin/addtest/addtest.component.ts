import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ValidateService} from "../../services/validate.service";

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

  constructor(private router:Router,
              private validateService:ValidateService) { }

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


}
