import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../core/services/session.service';
import {CardService} from '../../../core/services/card.service';
import {SummaryProductSaleModel} from '../../../core/models/SummaryProductSaleModel';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss']
})
export class SummaryOrderComponent implements OnInit {

  summaryProductSaleModel: SummaryProductSaleModel[];

  constructor(public sessionService: SessionService, private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getSummaryOrder(this.sessionService.username).subscribe(
      data => {
        this.summaryProductSaleModel = data;
      }
    )
  }
}
