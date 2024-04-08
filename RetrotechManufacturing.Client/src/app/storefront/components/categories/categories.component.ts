import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/core/entities/products/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  @Input() categories$: Observable<ICategory[]>;
  @Output() onCategoryFilterUpdated = new EventEmitter<number[]>();
  filters: CategoryFilter[];
  ngOnInit(): void {
    this.categories$.subscribe(x => {
      this.filters = x.map(c => new CategoryFilter(c))
    })
  }

  onChange(ob: MatCheckboxChange, categoryId: number) {
    let indexToReplace = this.filters.findIndex(item => item.id == categoryId);
    this.filters[indexToReplace].isSelected = ob.checked;

    this.onCategoryFilterUpdated.emit(this.filters.filter(c => c.isSelected).map(x => x.id));
  }
}

class CategoryFilter{
  id: number;
  isSelected: boolean;
  name: string;
  constructor(v: ICategory){
    this.id = v.id;
    this.isSelected = false;
    this.name = v.name;
  }
}
