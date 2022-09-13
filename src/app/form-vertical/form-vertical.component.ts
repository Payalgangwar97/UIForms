import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-vertical',
  templateUrl: './form-vertical.component.html',
  styleUrls: ['./form-vertical.component.css']
})
export class FormVerticalComponent implements OnInit {

  fullname = "";
  company_name = "";
  email = "";
  phone_number = "";
  message = "";


  constructor() { }

  ngOnInit(): void {
  }

  send(){

    let data = {

      fullname:this.fullname,
      company_name: this.company_name,
      email: this.email,
      phone_number: this.phone_number,
      message: this.message,
    }
    console.log(data);
  }

}
