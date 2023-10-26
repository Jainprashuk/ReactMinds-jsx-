import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionsComponent } from './expressions.component';

describe('ExpressionsComponent', () => {
  let component: ExpressionsComponent;
  let fixture: ComponentFixture<ExpressionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpressionsComponent]
    });
    fixture = TestBed.createComponent(ExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
