import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmgFormComponent } from './emg-form.component';

describe('EmgFormComponent', () => {
  let component: EmgFormComponent;
  let fixture: ComponentFixture<EmgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
