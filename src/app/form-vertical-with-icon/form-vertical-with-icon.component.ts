import { Component,EventEmitter, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-form-vertical-with-icon',
  templateUrl: './form-vertical-with-icon.component.html',
  styleUrls: ['./form-vertical-with-icon.component.css']
})
export class FormVerticalWithIconComponent implements OnInit {

  fullname = "";
  Company = "";
  email = "";
  phone = "";
  message = "";
  
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
    if (this.fullname.length < 3) {
      return false;
    }
    return true;
  }

  validate_Company() {
    if (this.Company.length < 3) {
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

  validate_message() {
    if (this.message.length < this.MIN_LENGTH_MESSAGE) {
      return false;
    }
    return true;
  }

  raise_error(message:string) {
    this.error = this.message;
    setTimeout(() => {this.error = "";}, 1500);
  }

  validate_form() {
    this.error = "";
    let form_data:any = {};

    if (!this.validate_name()) {
      this.raise_error("Invalid Name") 
      return false;
    }

    if (!this.validate_Company()) {
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

    if (!this.validate_message()) {
      this.raise_error("Query should contain atleast 50 characters.") 
      return false;
    }

    return {
      email: this.email,
      phone: this.phone,
      fullname: this.fullname,
      Company: this.Company,
      message: this.message
    }
  }
  
  onSubmit() {

    let data = {

      fullname:this.fullname,
      Company: this.Company,
      email: this.email,
      phone: this.phone,
      message: this.message,
    }

    let validated_form = this.validate_form();
    if (validated_form) {
      this.form_submitted.emit(validated_form)
      this.submitted = true;
      console.log(data);
    }
    

  }

}