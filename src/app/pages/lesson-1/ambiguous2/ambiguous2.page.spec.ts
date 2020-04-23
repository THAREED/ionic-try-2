import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ambiguous2Page } from './ambiguous2.page';

describe('Ambiguous2Page', () => {
  let component: Ambiguous2Page;
  let fixture: ComponentFixture<Ambiguous2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ambiguous2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ambiguous2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
