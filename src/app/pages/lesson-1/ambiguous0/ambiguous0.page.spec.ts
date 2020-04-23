import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ambiguous0Page } from './ambiguous0.page';

describe('Ambiguous0Page', () => {
  let component: Ambiguous0Page;
  let fixture: ComponentFixture<Ambiguous0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ambiguous0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ambiguous0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
