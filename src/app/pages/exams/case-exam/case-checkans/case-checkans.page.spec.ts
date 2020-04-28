import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseCheckansPage } from './case-checkans.page';

describe('CaseCheckansPage', () => {
  let component: CaseCheckansPage;
  let fixture: ComponentFixture<CaseCheckansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCheckansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseCheckansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
