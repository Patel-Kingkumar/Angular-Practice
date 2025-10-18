import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormarrayComponent } from './simple-formarray.component';

describe('SimpleFormarrayComponent', () => {
  let component: SimpleFormarrayComponent;
  let fixture: ComponentFixture<SimpleFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleFormarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
