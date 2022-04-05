import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAppComponent } from './read-app.component';

describe('ReadAppComponent', () => {
  let component: ReadAppComponent;
  let fixture: ComponentFixture<ReadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
