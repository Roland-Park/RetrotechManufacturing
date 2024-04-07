import { Component } from '@angular/core';
import { IPrice } from './core/entities/Price';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardsPerRow: number = 3;
  title = 'Retrotech Manufacturing';
  prices: IPrice[] = [
    {name: "price1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a", eaUsdCents: 5000},
    {name: "price2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a", eaUsdCents: 8050},
    {name: "price3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a", eaUsdCents: 4500},
    {name: "price4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a", eaUsdCents: 5000},
    {name: "price5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a", eaUsdCents: 5000},
  ]

  //since we want 3 items per row, if the number of prices is not divisible by 3 we want the leftovers to be left-justified
  //return an array just so we can ngFor over it...
  getNumberOfFillerCards(): any[]{
    const arr = [];
    for(let i = 0; i < this.prices.length; i++){
      arr.push(0);
    }
    
    return arr;
  }
}
