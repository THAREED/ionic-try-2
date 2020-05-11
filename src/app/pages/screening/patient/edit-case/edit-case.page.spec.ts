import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCasePage } from './edit-case.page';

describe('EditCasePage', () => {
  let component: EditCasePage;
  let fixture: ComponentFixture<EditCasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
