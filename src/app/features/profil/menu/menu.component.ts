import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      title: 'Profil',
      link:['profil']
    },
    {
      title: 'Setup',
      link: ['setup']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
