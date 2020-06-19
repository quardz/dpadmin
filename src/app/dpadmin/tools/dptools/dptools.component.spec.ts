import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptoolsComponent } from './dptools.component';

describe('DptoolsComponent', () => {
  let component: DptoolsComponent;
  let fixture: ComponentFixture<DptoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
