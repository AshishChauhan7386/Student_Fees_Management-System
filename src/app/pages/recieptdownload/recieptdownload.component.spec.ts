import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieptdownloadComponent } from './recieptdownload.component';

describe('RecieptdownloadComponent', () => {
  let component: RecieptdownloadComponent;
  let fixture: ComponentFixture<RecieptdownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecieptdownloadComponent]
    });
    fixture = TestBed.createComponent(RecieptdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
