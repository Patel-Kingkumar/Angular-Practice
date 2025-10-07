import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSixComponent } from './test-six.component';

describe('TestSixComponent', () => {
  let component: TestSixComponent;
  let fixture: ComponentFixture<TestSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
