import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliblingBComponent } from './slibling-b.component';

describe('SliblingBComponent', () => {
  let component: SliblingBComponent;
  let fixture: ComponentFixture<SliblingBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliblingBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliblingBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
