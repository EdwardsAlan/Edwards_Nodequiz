/*
============================================
; Title: NodeQuiz
; Author: Alan Edwards
; Date: Oct 6 2019
; Description: NodeQuiz
;===========================================
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CumlativeSummaryComponent } from './cumlative-summary.component';

describe('CumlativeSummaryComponent', () => {
  let component: CumlativeSummaryComponent;
  let fixture: ComponentFixture<CumlativeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CumlativeSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CumlativeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
