import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsxfragmentsComponent } from './jsxfragments.component';

describe('JsxfragmentsComponent', () => {
  let component: JsxfragmentsComponent;
  let fixture: ComponentFixture<JsxfragmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsxfragmentsComponent]
    });
    fixture = TestBed.createComponent(JsxfragmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
