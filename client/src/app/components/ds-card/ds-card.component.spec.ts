import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSCardComponent } from './ds-card.component';

describe('DSCardComponent', () => {
  let component: DSCardComponent;
  let fixture: ComponentFixture<DSCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
