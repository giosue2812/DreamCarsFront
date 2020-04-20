import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      title: "Login",
      icon: "person",
      links: 'connexion'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
