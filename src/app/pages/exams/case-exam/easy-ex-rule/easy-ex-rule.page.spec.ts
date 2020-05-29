import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyExRulePage } from './easy-ex-rule.page';

describe('EasyExRulePage', () => {
  let component: EasyExRulePage;
  let fixture: ComponentFixture<EasyExRulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyExRulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyExRulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
