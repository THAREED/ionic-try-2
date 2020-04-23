import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ex1RulePage } from './ex1-rule.page';

describe('Ex1RulePage', () => {
  let component: Ex1RulePage;
  let fixture: ComponentFixture<Ex1RulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1RulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1RulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
