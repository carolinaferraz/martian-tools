import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Card } from '../../service/category-card/card';
import { CardService } from '../../service/category-card/card.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {
  cards: Card[] = [];

   constructor(private cardService: CardService) { }

   ngOnInit(): void {
     this.getCategories();
   }

   getCategories(): void {
     this.cardService.getCards().subscribe(cards => this.cards = cards);
   }

}
