import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pra-report-comp',
  templateUrl: './pra-report-comp.component.html',
  styleUrls: ['./pra-report-comp.component.scss']
})
export class PraReportCompComponent implements OnInit {

  constructor() { }

  columnDefs = [
    { headerName: 'EG NUMBER', field: 'EG-NUMBER' },
    { headerName: 'EG TITLE', field: 'EG-EG-TITLE' },
    { headerName: 'EXP CODE', field: 'EXP-CODE' },
    { headerName: 'BANKER NAME', field: 'BANKER-NAME' },
    { headerName: 'WAARR', field: 'WAARR' },
    { headerName: 'AUM', field: 'AUM' },
    { headerName: 'IOS', field: 'IOS' },
    { headerName: 'RDIP REF CURRENCY', field: 'RDIP-REF-CURRENCY' },
    { headerName: 'REF CURRENCY', field: 'REF-CURRENCY' },

  ];

  rowData = [
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
    { 'EG-NUMBER': '002579418-0021', 'EG-EG-TITLE': 'EG Title Come Here', 'EXP-CODE': 2727, 'BANKER-NAME': 'Katz, Juan', 'WAARR':'5.15', 'AUM':'999.999999', 'IOS': '4','RDIP-REF-CURRENCY':'SGD, USD', 'REF-CURRENCY':'USD'},
  ];

  ngOnInit() {
  }

}
