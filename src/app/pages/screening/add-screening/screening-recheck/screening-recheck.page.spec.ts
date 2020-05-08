import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningRecheckPage } from './screening-recheck.page';

describe('ScreeningRecheckPage', () => {
  let component: ScreeningRecheckPage;
  let fixture: ComponentFixture<ScreeningRecheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningRecheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningRecheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
