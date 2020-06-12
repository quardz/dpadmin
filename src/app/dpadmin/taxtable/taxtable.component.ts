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
      { id: 1, name: "John", description: "Smith", slug: "Ohio", count: 1, weight: 0, _children: null },
      { id: 2, name: "Jane", description: "Doe", slug: "Iowa", count: 6, weight: 1, _children: null },
      { id: 3, name: "Bill", description: "Great", slug: "Hawaii", count: 2, weight: 2, _children: null },
      { id: 4, name: "Ted", description: "Adventure", slug: "Arizona", count: 0, weight: 3, _children: [
          {id: 5, name: "child 1", description: "Doe", slug: "Iowa", count: 6, weight: 1, _children: null},
          {id: 6, name: "child 2", description: "Doe", slug: "Iowa", count: 6, weight: 1, _children: null},
        ] 
      },
    ];

    this.columnNames = [
      { title: "Select", width: 40, formatter:"rowSelection", titleFormatter:"rowSelection", align:"center", headerSort:false},
      { title: "Id", field: "id",visible:false },
      { title: "Name", field: "name",editor:"input",headerFilter:"input" },
      { title: "Description", field: "description",editor:"textarea" },
      { title: "Slug", field: "slug",editor:"input" },
      { title: "Count", field: "count",formatter:"link", formatterParams:{
        labelField:"Count",
        urlPrefix:"https://posts.com/postsbytax/",
        } 
      },
      { title: "Weight", field: "weight",visible:false },
    ];

    // reference id of div where table is to be displayed (prepend #)
    
    

    this.myTable = new Tabulator("#tabulator-div", 
      {
        layout: 'fitColumns',
        selectable:true,
        dataTree:true,
        columns:[
          {
            formatter:"rowSelection", 
            titleFormatter:"rowSelection", 
            align:"center", 
            headerSort:false
          },
        ]
      }

     ); 
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
  _children: any,
  //parent: number,
}

