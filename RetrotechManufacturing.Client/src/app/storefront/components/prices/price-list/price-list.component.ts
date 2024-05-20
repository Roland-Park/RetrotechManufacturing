import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrice } from 'src/app/core/entities/prices/price';
import { MatDialog } from '@angular/material/dialog';
import { PriceDetailComponent } from '../price-detail/price-detail.component';
import { ThemePalette } from '@angular/material/core';
import { IProduct } from 'src/app/core/entities/products/product';

@Component({
  selector: 'price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  @Input() prices$: Observable<IPrice[]>;

  constructor(public dialog: MatDialog){}

  //since we want 3 items per row, if the number of prices is not divisible by 3,
  //we want the leftovers to be left-justified.
  //return an array of numbers (could be anything) 
  //with the correct number of elements just so we can ngFor over it
  getNumberOfFillerCards(prices: IPrice[] | null): any[]{
    if(!prices) return [];

    const arr = [];
    for(let i = 0; i < prices.length; i++){
      arr.push(0);
    }
    
    return arr;
  }

  public openDialog(price: IPrice): void {
    const dialogRef = this.dialog.open(PriceDetailComponent, {
      data: price,
      width: 'auto',
      height: '99%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
