import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalrejectedclientdetailsComponent } from './finalrejectedclientdetails.component';

describe('FinalrejectedclientdetailsComponent', () => {
  let component: FinalrejectedclientdetailsComponent;
  let fixture: ComponentFixture<FinalrejectedclientdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalrejectedclientdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalrejectedclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
