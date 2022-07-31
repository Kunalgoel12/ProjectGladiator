import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeteligibilityComponent } from './geteligibility.component';

describe('GeteligibilityComponent', () => {
  let component: GeteligibilityComponent;
  let fixture: ComponentFixture<GeteligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeteligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeteligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
