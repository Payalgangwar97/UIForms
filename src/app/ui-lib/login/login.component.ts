import { Component,EventEmitter, OnInit,Output,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = "";
  password = "";
  

  
  @Input() MIN_LENGTH_MESSAGE = 50;
  @Output() form_login = new EventEmitter();

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

  validate_password(password:string) {
    return String(password)
   
    .match(
      /^(((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}))$/
    );
  }

  raise_error(msg:string) {
    this.error = msg;
    setTimeout(() => {this.error = "";}, 1500);
  }

  validate_form() {
    this.error = "";
    let form_data:any = {};

  

    if (!this.validate_email(this.email)) {
      this.raise_error("Invalid Email") 
      return false;
    }

    
    if (!this.validate_password(this.password)) {
      this.raise_error("Invalid Password") 
      return false;
    }




    return {
      email: this.email,
      password: this.password,
    }
  }
  
  onSubmit() {

    let data = {
      email: this.email,
      password: this.password,
    
    }

    let validated_form = this.validate_form();
    if (validated_form) {
      this.form_login.emit(validated_form)
      this.submitted = true;
      console.log(data);
    }
    

  }

}
