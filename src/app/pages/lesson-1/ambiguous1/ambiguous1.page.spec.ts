import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ambiguous1Page } from './ambiguous1.page';

describe('Ambiguous1Page', () => {
  let component: Ambiguous1Page;
  let fixture: ComponentFixture<Ambiguous1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ambiguous1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ambiguous1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
