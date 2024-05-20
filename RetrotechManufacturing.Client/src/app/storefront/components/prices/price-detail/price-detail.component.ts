import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPrice } from 'src/app/core/entities/prices/price';


@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css']
})
export class PriceDetailComponent{
  constructor(public dialogRef: MatDialogRef<PriceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPrice){

  }

  back(): void{
    this.dialogRef.close();
  }
}
