import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivemFormComponent } from './template-drivem-form.component';

describe('TemplateDrivemFormComponent', () => {
  let component: TemplateDrivemFormComponent;
  let fixture: ComponentFixture<TemplateDrivemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
