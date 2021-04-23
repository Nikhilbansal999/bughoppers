import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Testing2Component } from './testing2.component';

describe('Testing2Component', () => {
  let component: Testing2Component;
  let fixture: ComponentFixture<Testing2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
