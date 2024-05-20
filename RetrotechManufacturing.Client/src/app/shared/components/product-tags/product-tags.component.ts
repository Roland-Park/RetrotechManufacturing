import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/core/entities/products/product';

@Component({
  selector: 'product-tags',
  templateUrl: './product-tags.component.html',
  styleUrls: ['./product-tags.component.css']
})
export class ProductTagsComponent {
  @Input() product: IProduct;

  isUnfinishedCategory(product: IProduct): boolean{
    const unfinishedCategoryId: number = 4;
    return !!product.categories.find(x => x.id == unfinishedCategoryId);
  }
}
