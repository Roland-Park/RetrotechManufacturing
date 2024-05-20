import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPrice } from 'src/app/core/entities/prices/price';


@Component({
  selector: 'app-price-detail',
  templateUrl: './price-detail.component.html',
  styleUrls: ['./price-detail.component.css']
})
export class PriceDetailComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<PriceDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPrice){

  }
  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.isPrimary);
  }
}
