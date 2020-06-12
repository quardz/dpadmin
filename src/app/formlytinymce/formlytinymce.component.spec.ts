import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlytinymceComponent } from './formlytinymce.component';

describe('FormlytinymceComponent', () => {
  let component: FormlytinymceComponent;
  let fixture: ComponentFixture<FormlytinymceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlytinymceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlytinymceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
