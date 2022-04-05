import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatFormComponent } from './pat-form.component';

describe('PatFormComponent', () => {
  let component: PatFormComponent;
  let fixture: ComponentFixture<PatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
