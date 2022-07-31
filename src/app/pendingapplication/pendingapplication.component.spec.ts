import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingapplicationComponent } from './pendingapplication.component';

describe('PendingapplicationComponent', () => {
  let component: PendingapplicationComponent;
  let fixture: ComponentFixture<PendingapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
