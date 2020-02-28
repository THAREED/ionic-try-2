import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson14Page } from './lesson14.page';

describe('Lesson14Page', () => {
  let component: Lesson14Page;
  let fixture: ComponentFixture<Lesson14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
