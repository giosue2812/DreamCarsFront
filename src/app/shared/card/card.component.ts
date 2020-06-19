import { Component, OnInit } from '@angular/core';
import {CardService} from '../../core/services/card.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  article = 0;
  constructor(public cardService: CardService) {
  }

  ngOnInit(): void {
  }

}
