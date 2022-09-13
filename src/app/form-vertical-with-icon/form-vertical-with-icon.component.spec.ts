import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerticalWithIconComponent } from './form-vertical-with-icon.component';

describe('FormVerticalWithIconComponent', () => {
  let component: FormVerticalWithIconComponent;
  let fixture: ComponentFixture<FormVerticalWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVerticalWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVerticalWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
