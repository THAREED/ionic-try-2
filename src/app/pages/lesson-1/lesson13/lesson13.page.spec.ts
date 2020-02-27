import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson13Page } from './lesson13.page';

describe('Lesson13Page', () => {
  let component: Lesson13Page;
  let fixture: ComponentFixture<Lesson13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
