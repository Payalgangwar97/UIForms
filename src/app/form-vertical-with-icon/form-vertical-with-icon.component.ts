import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-vertical-with-icon',
  templateUrl: './form-vertical-with-icon.component.html',
  styleUrls: ['./form-vertical-with-icon.component.css']
})
export class FormVerticalWithIconComponent implements OnInit {

  fullname = "";
  company_name = "";
  email = "";
  phone = "";
  message = "";


  constructor() { }

  ngOnInit(): void {
  }

  send(){

    let data = {

      fullname:this.fullname,
      company_name: this.company_name,
      email: this.email,
      phone: this.phone,
      message: this.message,
    }
    console.log(data);
  }

}
