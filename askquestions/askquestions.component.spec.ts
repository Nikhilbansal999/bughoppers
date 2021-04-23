import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AskquestionsComponent } from './askquestions.component';

describe('AskquestionsComponent', () => {
  let component: AskquestionsComponent;
  let fixture: ComponentFixture<AskquestionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AskquestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
