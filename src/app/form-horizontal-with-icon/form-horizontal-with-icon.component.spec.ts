import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalWithIconComponent } from './form-horizontal-with-icon.component';

describe('FormHorizontalWithIconComponent', () => {
  let component: FormHorizontalWithIconComponent;
  let fixture: ComponentFixture<FormHorizontalWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHorizontalWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorizontalWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
