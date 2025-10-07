import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThreeOneComponent } from './test-three-one.component';

describe('TestThreeOneComponent', () => {
  let component: TestThreeOneComponent;
  let fixture: ComponentFixture<TestThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThreeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
