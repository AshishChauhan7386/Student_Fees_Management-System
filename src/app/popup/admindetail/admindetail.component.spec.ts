import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailComponent } from './admindetail.component';

describe('AdmindetailComponent', () => {
  let component: AdmindetailComponent;
  let fixture: ComponentFixture<AdmindetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindetailComponent]
    });
    fixture = TestBed.createComponent(AdmindetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
