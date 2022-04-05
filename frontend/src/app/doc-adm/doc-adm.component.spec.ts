import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAdmComponent } from './doc-adm.component';

describe('DocAdmComponent', () => {
  let component: DocAdmComponent;
  let fixture: ComponentFixture<DocAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
