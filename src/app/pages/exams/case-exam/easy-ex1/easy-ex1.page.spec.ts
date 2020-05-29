import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EasyEx1Page } from './easy-ex1.page';

describe('EasyEx1Page', () => {
  let component: EasyEx1Page;
  let fixture: ComponentFixture<EasyEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EasyEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
