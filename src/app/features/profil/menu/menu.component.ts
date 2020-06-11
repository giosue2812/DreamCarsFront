import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  /**
   * @type menu: array
   */
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

}
