import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispEmpComponent } from './disp-emp.component';

describe('DispEmpComponent', () => {
  let component: DispEmpComponent;
  let fixture: ComponentFixture<DispEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
