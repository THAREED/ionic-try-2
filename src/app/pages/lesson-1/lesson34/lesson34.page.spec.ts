import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lesson34Page } from './lesson34.page';

describe('Lesson34Page', () => {
  let component: Lesson34Page;
  let fixture: ComponentFixture<Lesson34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson34Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
