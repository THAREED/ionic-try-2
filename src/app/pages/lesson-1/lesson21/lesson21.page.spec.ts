import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson21Page } from './lesson21.page';

describe('Lesson21Page', () => {
  let component: Lesson21Page;
  let fixture: ComponentFixture<Lesson21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson21Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
