import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnewComponent } from './postnew.component';

describe('PostnewComponent', () => {
  let component: PostnewComponent;
  let fixture: ComponentFixture<PostnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
