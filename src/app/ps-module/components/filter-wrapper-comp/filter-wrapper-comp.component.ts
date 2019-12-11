import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-wrapper-comp',
  templateUrl: './filter-wrapper-comp.component.html',
  styleUrls: ['./filter-wrapper-comp.component.scss']
})
export class FilterWrapperCompComponent implements OnInit {

  constructor() { }

  tools = [
    {value: 'DRMR-0', viewValue: 'DRMR'},
    {value: 'Transfer-Pay-1', viewValue: 'Transfer & Pay'},
    {value: 'Portfolio-2', viewValue: 'Portfolio'}
  ];

  filters = [
    {value: 'All-bankers-0', viewValue: 'All Bankers'},
    {value: 'All-bankers-1', viewValue: 'All Bankers'},
    {value: 'All-bankers-2', viewValue: 'All Bankers'}
  ];

  ngOnInit() {
  }

}
