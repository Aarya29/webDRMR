import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBreakCompComponent } from './knowledge-break-comp.component';

describe('KnowledgeBreakCompComponent', () => {
  let component: KnowledgeBreakCompComponent;
  let fixture: ComponentFixture<KnowledgeBreakCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBreakCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBreakCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
