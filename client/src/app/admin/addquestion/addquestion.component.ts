import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  question:String;
  optionA:String;
  optionB:String;
  optionC:String;
  optionD:String;
  constructor() { }

  ngOnInit() {
  }

}
