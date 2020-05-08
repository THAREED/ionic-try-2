import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPatientImg2Page } from './add-patient-img2.page';

describe('AddPatientImg2Page', () => {
  let component: AddPatientImg2Page;
  let fixture: ComponentFixture<AddPatientImg2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientImg2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPatientImg2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
