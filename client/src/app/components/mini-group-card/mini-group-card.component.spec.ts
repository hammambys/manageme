import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGroupCardComponent } from './mini-group-card.component';

describe('MiniGroupCardComponent', () => {
  let component: MiniGroupCardComponent;
  let fixture: ComponentFixture<MiniGroupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniGroupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
