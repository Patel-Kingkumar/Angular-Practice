import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSinglePracticeComponent } from './nested-single-practice.component';

describe('NestedSinglePracticeComponent', () => {
  let component: NestedSinglePracticeComponent;
  let fixture: ComponentFixture<NestedSinglePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedSinglePracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedSinglePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
