import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTagsComponent } from './product-tags.component';

describe('ProductTagsComponent', () => {
  let component: ProductTagsComponent;
  let fixture: ComponentFixture<ProductTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTagsComponent]
    });
    fixture = TestBed.createComponent(ProductTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
