import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventsBdComponent } from './past-events-bd.component';

describe('PastEventsBdComponent', () => {
  let component: PastEventsBdComponent;
  let fixture: ComponentFixture<PastEventsBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEventsBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEventsBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
