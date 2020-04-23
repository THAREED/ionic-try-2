import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson31Page } from './lesson31.page';

describe('Lesson31Page', () => {
  let component: Lesson31Page;
  let fixture: ComponentFixture<Lesson31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
