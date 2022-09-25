import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar-grey',
  templateUrl: './sidebar-grey.component.html',
  styleUrls: ['./sidebar-grey.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarGreyComponent implements OnInit {
  @Input()menu = [
    {
      "name": "Dashboard",
      "icon_class": "fa-columns",
      "is_active": true,
      "link": "/"
    },
    {
      "name": "Analytics",      
      "icon_class": "fa-chart-bar",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Profile",
      "icon_class": "fa-user-alt",
      "is_active": false,
      "link": "/"
    },
    {
      "name": "Settings",
      "icon_class": "fa-cog",
      "is_active": false,
      "link": "/"
    }
  ]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  go_to_link(selected:any) {
    this.menu.forEach((element:any) => {
        if (element.name == selected.name) {
          element.is_active = true;
        } else {
          element.is_active = false;
        }
    });
    this.route.navigate([selected.link]);

  }

}
