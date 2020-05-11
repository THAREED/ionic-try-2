import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson30Page } from './lesson30.page';

describe('Lesson30Page', () => {
  let component: Lesson30Page;
  let fixture: ComponentFixture<Lesson30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson30Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
