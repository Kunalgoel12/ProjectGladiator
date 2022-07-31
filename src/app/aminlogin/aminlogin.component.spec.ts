import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AminloginComponent } from './aminlogin.component';

describe('AminloginComponent', () => {
  let component: AminloginComponent;
  let fixture: ComponentFixture<AminloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AminloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
