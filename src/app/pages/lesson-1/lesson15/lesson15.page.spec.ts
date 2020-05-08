import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson15Page } from './lesson15.page';

describe('Lesson15Page', () => {
  let component: Lesson15Page;
  let fixture: ComponentFixture<Lesson15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
