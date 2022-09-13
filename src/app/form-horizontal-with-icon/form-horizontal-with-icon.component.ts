import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-form-horizontal-with-icon',
  templateUrl: './form-horizontal-with-icon.component.html',
  styleUrls: ['./form-horizontal-with-icon.component.css']
})
export class FormHorizontalWithIconComponent implements OnInit {
  name = "";
  company_name = "";
  email = "";
  phone = "";
  msg = "";
  constructor() { }

  ngOnInit(): void {
  }


  send(){

    let data = {

      name:this.name,
      company_name: this.company_name,
      email: this.email,
      phone: this.phone,
      msg: this.msg,
    }
    console.log(data);
  }

}
