import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningChoosePage } from './screening-choose.page';

describe('ScreeningChoosePage', () => {
  let component: ScreeningChoosePage;
  let fixture: ComponentFixture<ScreeningChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
