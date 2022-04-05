import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEmgComponent } from './call-emg.component';

describe('CallEmgComponent', () => {
  let component: CallEmgComponent;
  let fixture: ComponentFixture<CallEmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallEmgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallEmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
