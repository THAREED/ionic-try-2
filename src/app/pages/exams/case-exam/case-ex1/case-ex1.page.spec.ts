import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseEx1Page } from './case-ex1.page';

describe('CaseEx1Page', () => {
  let component: CaseEx1Page;
  let fixture: ComponentFixture<CaseEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
