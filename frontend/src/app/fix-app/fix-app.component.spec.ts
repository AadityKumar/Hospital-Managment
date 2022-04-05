import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixAppComponent } from './fix-app.component';

describe('FixAppComponent', () => {
  let component: FixAppComponent;
  let fixture: ComponentFixture<FixAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
