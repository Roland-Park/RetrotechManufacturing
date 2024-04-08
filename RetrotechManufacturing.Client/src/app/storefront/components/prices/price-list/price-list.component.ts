import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrice } from 'src/app/core/entities/prices/price';

@Component({
  selector: 'price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  @Input() prices$: Observable<IPrice[]>;

  //since we want 3 items per row, if the number of prices is not divisible by 3 we want the leftovers to be left-justified
  //return an array of anything with the correct number of elements just so we can ngFor over it...
  getNumberOfFillerCards(prices: IPrice[] | null): any[]{
    if(!prices) return [];

    const arr = [];
    for(let i = 0; i < prices.length; i++){
      arr.push(0);
    }
    
    return arr;
  }
}
