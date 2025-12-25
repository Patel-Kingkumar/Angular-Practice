import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentZeroComponent } from './parent-zero.component';

describe('ParentZeroComponent', () => {
  let component: ParentZeroComponent;
  let fixture: ComponentFixture<ParentZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentZeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
