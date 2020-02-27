import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson11Page } from './lesson11.page';

describe('Lesson11Page', () => {
  let component: Lesson11Page;
  let fixture: ComponentFixture<Lesson11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
