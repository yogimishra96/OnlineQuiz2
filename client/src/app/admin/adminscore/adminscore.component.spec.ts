import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminscoreComponent } from './adminscore.component';

describe('AdminscoreComponent', () => {
  let component: AdminscoreComponent;
  let fixture: ComponentFixture<AdminscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
