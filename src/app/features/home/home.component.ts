import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {INVALID_ENTRY_POINT} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  choiceFilter:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.choiceFilter = this.formBuilder.group({
      choiceCat:new FormControl('',[Validators.required]),
      choiceSubCat:new FormControl('',[Validators.required])
    });
  }
  onSubmitForm(){
    console.log(this.choiceFilter.value);
  }
}
