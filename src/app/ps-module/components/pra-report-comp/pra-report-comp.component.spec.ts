import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraReportCompComponent } from './pra-report-comp.component';

describe('PraReportCompComponent', () => {
  let component: PraReportCompComponent;
  let fixture: ComponentFixture<PraReportCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraReportCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraReportCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
