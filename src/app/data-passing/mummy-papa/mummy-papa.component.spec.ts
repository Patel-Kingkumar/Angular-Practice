import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MummyPapaComponent } from './mummy-papa.component';

describe('MummyPapaComponent', () => {
  let component: MummyPapaComponent;
  let fixture: ComponentFixture<MummyPapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MummyPapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MummyPapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
