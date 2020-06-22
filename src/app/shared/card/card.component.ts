import { Component, OnInit } from '@angular/core';
import {CardService} from '../../core/services/card.service';
import {Observable} from 'rxjs';
import {SessionService} from '../../core/services/session.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   * @type article: Number
   */
  article = 0;

  /**
   * @param cardService: CardService
   * @param sessionService: SessionService
   */
  constructor(public cardService: CardService,private sessionService: SessionService) {
  }

  /**
   * @description Get card's user
   */
  ngOnInit(): void {
        this.cardService.getCard(this.sessionService.username).subscribe(
      data => {
              if (data) {
                this.article += 1;
              }
          });
    }
}
