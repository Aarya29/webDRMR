import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrwReportCompComponent } from './prw-report-comp.component';

describe('PrwReportCompComponent', () => {
  let component: PrwReportCompComponent;
  let fixture: ComponentFixture<PrwReportCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrwReportCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrwReportCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
