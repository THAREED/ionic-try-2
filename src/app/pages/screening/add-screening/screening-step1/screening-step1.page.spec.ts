import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningStep1Page } from './screening-step1.page';

describe('ScreeningStep1Page', () => {
  let component: ScreeningStep1Page;
  let fixture: ComponentFixture<ScreeningStep1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningStep1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningStep1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
