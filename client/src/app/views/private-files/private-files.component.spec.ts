import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFilesComponent } from './private-files.component';

describe('PrivateFilesComponent', () => {
  let component: PrivateFilesComponent;
  let fixture: ComponentFixture<PrivateFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
