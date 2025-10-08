import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChhokroComponent } from './chhokro.component';

describe('ChhokroComponent', () => {
  let component: ChhokroComponent;
  let fixture: ComponentFixture<ChhokroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChhokroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChhokroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
