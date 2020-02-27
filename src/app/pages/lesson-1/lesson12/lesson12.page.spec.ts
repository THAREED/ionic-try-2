import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson12Page } from './lesson12.page';

describe('Lesson12Page', () => {
  let component: Lesson12Page;
  let fixture: ComponentFixture<Lesson12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
