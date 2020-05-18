import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  menu = [
    {
      title: 'Search',
      link: ['search']
    },
    {
      title: 'Groupe',
      link: ['groupe']
    },
    {
      title: 'Role',
      link: ['role']
    }
  ];
}
