//import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';


@Component({
  selector: 'app-taxtable', 
  templateUrl: './taxtable.component.html',
  styleUrls: ['./taxtable.component.scss']
})

export class TaxtableComponent implements OnInit{  

  title = 'DemoTabulator';
  terms: ITerm[] = [];
  columnNames: any[] = [];
  myTable: Tabulator;

  
  @Input() tableData: any[];


  constructor() {
  }

  ngOnInit() {
    this.terms = [
      { id: 1, name: "John", description: "Smith", slug: "Ohio", count: 1, weight: 0 },
      { id: 2, name: "Jane", description: "Doe", slug: "Iowa", count: 6, weight: 1 },
      { id: 3, name: "Bill", description: "Great", slug: "Hawaii", count: 2, weight: 2 },
      { id: 4, name: "Ted", description: "Adventure", slug: "Arizona", count: 0, weight: 3 },
    ];

    this.columnNames = [
      { title: "Id", field: "id" },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Slug", field: "slug" },
      { title: "Count", field: "count" },
      { title: "Weight", field: "weight" },

    ];

    // reference id of div where table is to be displayed (prepend #)
    
    this.myTable = new Tabulator("#tabulator-div", {layout: 'fitColumns'}); 
    //this.myTable.layout(this.columnNames);
    this.myTable.setColumns(this.columnNames);
    this.myTable.setData(this.terms);
  }

}

interface ITerm {
  id: number,
  name: string,
  description: string,
  slug: string,
  count: number,
  weight: number,
  //parent: number,
}

