import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThreeTwoComponent } from './test-three-two.component';

describe('TestThreeTwoComponent', () => {
  let component: TestThreeTwoComponent;
  let fixture: ComponentFixture<TestThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThreeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
