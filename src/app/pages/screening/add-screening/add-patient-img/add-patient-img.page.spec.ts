import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPatientImgPage } from './add-patient-img.page';

describe('AddPatientImgPage', () => {
  let component: AddPatientImgPage;
  let fixture: ComponentFixture<AddPatientImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPatientImgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPatientImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
