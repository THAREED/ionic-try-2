import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientEditPage } from './patient-edit.page';

describe('PatientEditPage', () => {
  let component: PatientEditPage;
  let fixture: ComponentFixture<PatientEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
