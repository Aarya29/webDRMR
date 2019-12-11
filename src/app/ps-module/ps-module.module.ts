import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PrwReportCompComponent } from './components/prw-report-comp/prw-report-comp.component';
import { PraReportCompComponent } from './components/pra-report-comp/pra-report-comp.component';
import { ProReportCompComponent } from './components/pro-report-comp/pro-report-comp.component';
import { NoIosReportCompComponent } from './components/no-ios-report-comp/no-ios-report-comp.component';
import { PreReportCompComponent } from './components/pre-report-comp/pre-report-comp.component';
import { CombinedEgCompComponent } from './components/combined-eg-comp/combined-eg-comp.component';
import { KnowledgeBreakCompComponent } from './components/knowledge-break-comp/knowledge-break-comp.component';
import { ConcentrationBreakCompComponent } from './components/concentration-break-comp/concentration-break-comp.component';
import { FilterWrapperCompComponent } from './components/filter-wrapper-comp/filter-wrapper-comp.component';
import { PsHomeCompComponent } from './components/ps-home-comp/ps-home-comp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PrwReportCompComponent,
    PraReportCompComponent,
    ProReportCompComponent,
    NoIosReportCompComponent,
    PreReportCompComponent,
    CombinedEgCompComponent,
    KnowledgeBreakCompComponent,
    ConcentrationBreakCompComponent,
    FilterWrapperCompComponent,
    PsHomeCompComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule
  ],
  exports: [
    PsHomeCompComponent,
    FilterWrapperCompComponent
  ],
})
export class PsModuleModule { }
