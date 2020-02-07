import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdaterComponent } from './product-updater.component';

describe('ProductUpdaterComponent', () => {
  let component: ProductUpdaterComponent;
  let fixture: ComponentFixture<ProductUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
