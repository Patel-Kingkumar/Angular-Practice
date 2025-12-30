import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliblingAComponent } from './slibling-a.component';

describe('SliblingAComponent', () => {
  let component: SliblingAComponent;
  let fixture: ComponentFixture<SliblingAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliblingAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliblingAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
