import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTwoComponent } from './reactive-two.component';

describe('ReactiveTwoComponent', () => {
  let component: ReactiveTwoComponent;
  let fixture: ComponentFixture<ReactiveTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
