import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScreeningHelper2Page } from './screening-helper2.page';

describe('ScreeningHelper2Page', () => {
  let component: ScreeningHelper2Page;
  let fixture: ComponentFixture<ScreeningHelper2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreeningHelper2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningHelper2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
