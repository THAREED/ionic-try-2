import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ex1ScorePage } from './ex1-score.page';

describe('Ex1ScorePage', () => {
  let component: Ex1ScorePage;
  let fixture: ComponentFixture<Ex1ScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1ScorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1ScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
