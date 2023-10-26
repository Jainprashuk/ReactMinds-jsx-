import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsxelementsComponent } from './jsxelements.component';

describe('JsxelementsComponent', () => {
  let component: JsxelementsComponent;
  let fixture: ComponentFixture<JsxelementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsxelementsComponent]
    });
    fixture = TestBed.createComponent(JsxelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
