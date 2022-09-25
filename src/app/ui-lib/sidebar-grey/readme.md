# Grey Sidebar for CRM

Grey Sidebar for generic crms with proper option to map pages and trasverse to the link if link is given in option

## Download Command.

```jennie angular ui-lib download sidebar-grey```

**make sure to run the command inside project**

## How to use

#### Declare HTML in component file

```html
<app-sidebar-grey [menu]="sidebar_menu"></app-sidebar-grey>
```

where component takes basic menu configration, declare menu inside component ts file.

```ts

sidebar_menu = [
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
```