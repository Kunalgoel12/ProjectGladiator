import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinashowclientdetailsComponent } from './finashowclientdetails.component';

describe('FinashowclientdetailsComponent', () => {
  let component: FinashowclientdetailsComponent;
  let fixture: ComponentFixture<FinashowclientdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinashowclientdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinashowclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
