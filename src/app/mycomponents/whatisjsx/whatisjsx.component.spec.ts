import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisjsxComponent } from './whatisjsx.component';

describe('WhatisjsxComponent', () => {
  let component: WhatisjsxComponent;
  let fixture: ComponentFixture<WhatisjsxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatisjsxComponent]
    });
    fixture = TestBed.createComponent(WhatisjsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
