import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentParentComponent } from './parent-parent.component';

describe('ParentParentComponent', () => {
  let component: ParentParentComponent;
  let fixture: ComponentFixture<ParentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
