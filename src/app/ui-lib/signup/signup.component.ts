import { Component,EventEmitter, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = "";
  email = "";
  password = "";
  number = "";
  

  
  @Input() MIN_LENGTH_MESSAGE = 50;
  @Output() form_signup = new EventEmitter();

  submitted: boolean | undefined;

  error: string | undefined = "";

  constructor() { }

  ngOnInit(): void {

    
  }

  validate_name() {
    if (this.name.length < 3) {
      return false;
    }
    return true;
  }

  validate_email(email:string) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  validate_password(password:string) {
    return String(password)
   
    .match(
      /^(((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}))$/
    );
  }

  validate_number() {
    if (this.number.toString().length == 10) {
      return true;
    }
    return false;
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

    if (!this.validate_email(this.email)) {
      this.raise_error("Invalid Email") 
      return false;
    }

    
    if (!this.validate_password(this.password)) {
      this.raise_error("Invalid Password") 
      return false;
    }


    if (!this.validate_number()) {
      this.raise_error("Invalid Phone Number") 
      return false;
    }




    return {
      name: this.name,
      email: this.email,
      password: this.password,
      number: this.number,
    }
  }
  
  onSubmit() {

    let data = {
      name: this.name,
      email: this.email,
      password: this.password,
      number: this.number,
    
    }

    let validated_form = this.validate_form();
    if (validated_form) {
      this.form_signup.emit(validated_form)
      this.submitted = true;
      console.log(data);
    }
    

  }

}
