import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesdepositComponent } from './feesdeposit.component';

describe('FeesdepositComponent', () => {
  let component: FeesdepositComponent;
  let fixture: ComponentFixture<FeesdepositComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeesdepositComponent]
    });
    fixture = TestBed.createComponent(FeesdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
