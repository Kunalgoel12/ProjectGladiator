import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedapplicationComponent } from './rejectedapplication.component';

describe('RejectedapplicationComponent', () => {
  let component: RejectedapplicationComponent;
  let fixture: ComponentFixture<RejectedapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
