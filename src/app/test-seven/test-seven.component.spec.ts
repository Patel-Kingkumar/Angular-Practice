import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSevenComponent } from './test-seven.component';

describe('TestSevenComponent', () => {
  let component: TestSevenComponent;
  let fixture: ComponentFixture<TestSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSevenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
