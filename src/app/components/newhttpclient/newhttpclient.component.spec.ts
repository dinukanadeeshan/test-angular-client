import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhttpclientComponent } from './newhttpclient.component';

describe('NewhttpclientComponent', () => {
  let component: NewhttpclientComponent;
  let fixture: ComponentFixture<NewhttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewhttpclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewhttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
