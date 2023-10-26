import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsxattributesComponent } from './jsxattributes.component';

describe('JsxattributesComponent', () => {
  let component: JsxattributesComponent;
  let fixture: ComponentFixture<JsxattributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsxattributesComponent]
    });
    fixture = TestBed.createComponent(JsxattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
