import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaseRulePage } from './case-rule.page';

describe('CaseRulePage', () => {
  let component: CaseRulePage;
  let fixture: ComponentFixture<CaseRulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseRulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaseRulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
