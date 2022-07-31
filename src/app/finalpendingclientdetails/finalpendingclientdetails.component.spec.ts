import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpendingclientdetailsComponent } from './finalpendingclientdetails.component';

describe('FinalpendingclientdetailsComponent', () => {
  let component: FinalpendingclientdetailsComponent;
  let fixture: ComponentFixture<FinalpendingclientdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalpendingclientdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalpendingclientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
