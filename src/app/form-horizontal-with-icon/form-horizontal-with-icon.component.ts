import { Component,EventEmitter, OnInit,Output,Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-horizontal-with-icon',
  templateUrl: './form-horizontal-with-icon.component.html',
  styleUrls: ['./form-horizontal-with-icon.component.css']
})
export class FormHorizontalWithIconComponent implements OnInit {
  name = "";
  company = "";
  email = "";
  phone = "";
  msg = "";
  
  @Input() MIN_LENGTH_MESSAGE = 50;
  @Output() form_submitted = new EventEmitter();

  submitted: boolean | undefined;

  error: string | undefined = "";

  constructor() { }

  ngOnInit(): void {

    
  }

  validate_email(email:string) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  validate_name() {
    if (this.name.length < 3) {
      return false;
    }
    return true;
  }

  validate_company() {
    if (this.company.length < 3) {
      return false;
    }
    return true;
  }

  validate_phone() {
    if (this.phone.toString().length == 10) {
      return true;
    }
    return false;
  }

  validate_msg() {
    if (this.msg.length < this.MIN_LENGTH_MESSAGE) {
      return false;
    }
    return true;
  }

  raise_error(msg:string) {
    this.error = msg;
    setTimeout(() => {this.error = "";}, 1500);
  }

  validate_form() {
    this.error = "";
    let form_data:any = {};

    if (!this.validate_name()) {
      this.raise_error("Invalid Name") 
      return false;
    }

    if (!this.validate_company()) {
      this.raise_error("Invalid Company name") 
      return false;
    }

    if (!this.validate_email(this.email)) {
      this.raise_error("Invalid Email") 
      return false;
    }
    


    if (!this.validate_phone()) {
      this.raise_error("Invalid Phone No") 
      return false;
    }

    if (!this.validate_msg()) {
      this.raise_error("Query should contain atleast 50 characters.") 
      return false;
    }

    return {
      email: this.email,
      phone: this.phone,
      name: this.name,
      company: this.company,
      msg: this.msg
    }
  }
  
  onSubmit() {

    let data = {

      name:this.name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      msg: this.msg,
    }

    let validated_form = this.validate_form();
    if (validated_form) {
      this.form_submitted.emit(validated_form)
      this.submitted = true;
      console.log(data);
    }
    

  }

}