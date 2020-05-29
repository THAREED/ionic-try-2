import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyEx1ScorePage } from './easy-ex1-score.page';

describe('EasyEx1ScorePage', () => {
  let component: EasyEx1ScorePage;
  let fixture: ComponentFixture<EasyEx1ScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyEx1ScorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyEx1ScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
