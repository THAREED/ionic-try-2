import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningHelperPage } from './screening-helper.page';

describe('ScreeningHelperPage', () => {
  let component: ScreeningHelperPage;
  let fixture: ComponentFixture<ScreeningHelperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningHelperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningHelperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
