import { Component, Input, OnInit } from '@angular/core';

import { Drink } from 'src/app/services/drinks.service';

@Component({
  selector: 'app-drink-graphic',
  templateUrl: './drink-graphic.component.html',
  styleUrls: ['./drink-graphic.component.scss'],
})
export class DrinkGraphicComponent implements OnInit {
  @Input() drink: Drink;

  constructor() {}

  ngOnInit() {
    console.log(this.drink.recipe);
  }
}
