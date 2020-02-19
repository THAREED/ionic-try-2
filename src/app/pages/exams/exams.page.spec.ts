import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsPage } from './exams.page';

describe('ExamsPage', () => {
  let component: ExamsPage;
  let fixture: ComponentFixture<ExamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
