//import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { DptermsService } from '../services/dpterms.service';
import { nSQL } from "@nano-sql/core";


@Component({
  selector: 'app-taxtable', 
  templateUrl: './taxtable.component.html',
  styleUrls: ['./taxtable.component.scss']
})

export class TaxtableComponent implements OnInit{  

  title = 'DemoTabulator';
  terms: any[];
  columnNames: any[] = [];
  myTable: Tabulator;
  find: string;
  
  @Input() taxonomy_machine_name: string;


  constructor(private dpterms: DptermsService) {


  }

  ngOnInit() {
    //var terms;
    //var termtrees: any;
    //terms = this.dpterms.getTermstree("post_tag", "adal");
    //console.log("terms data", terms);
/*
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
*/
    this.columnNames = [

      { title: "Select", width: 75, formatter:"rowSelection", titleFormatter:"rowSelection", align:"center", headerSort:false},
      { title: "Id", field: "id",visible:false },
      { title: "Name", field: "name" },
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
    
    var tab_settings = {
        layout: 'fitColumns',
        selectable:true,
        dataTree:true,
        movableRows: true, //enable user movable rows
        columns:[
          {
            formatter:"rowSelection", 
            titleFormatter:"rowSelection", 
            align:"center", 
            headerSort:false
          },
          {
            rowHandle:true, 
            formatter:"handle", 
            headerSort:false, 
            frozen:true, 
            width:30, 
            minWidth:30},
        ]
    };

    
    //this.myTable.layout(this.columnNames);

    nSQL().useDatabase("adal");
    nSQL("terms").query("select", ["terms.term_id as id", "terms.name as name", "terms.slug as slug","terms.term_group as group", "term_taxonomy.term_taxonomy_id as term_taxonomy_id", "term_taxonomy.taxonomy as taxonomy", "term_taxonomy.description as description", "term_taxonomy.parent as parent", "term_taxonomy.count as count"])
    .join({
       type: "left",
       with: {table: "term_taxonomy"},
       on: ["terms.term_id","=","term_taxonomy.term_id"]
    })
   // .where(["term_taxonomy.taxonomy","=","category"]) 
//    .orderBy(["terms.term_id ASC"])
    .exec()

    .then((rows) => {

      this.terms = rows;
      this.myTable = new Tabulator("#tabulator-div", tab_settings); 
      this.myTable.setColumns(this.columnNames);
      this.myTable.setData(this.terms);
      this.myTable.setFilter(this.customFilter, {taxonomy: this.taxonomy_machine_name});
      console.log("got rows", rows);
    });    
    
  }

  customFilter(data, filterParams){
    return data.taxonomy == filterParams.taxonomy; //must return a boolean, true if it passes the filter.
  }


  findbyname(event){
    console.log(event);
    this.myTable.clearFilter();    
    this.myTable.setFilter(this.customFilter, {taxonomy: this.taxonomy_machine_name});
    console.log(this.taxonomy_machine_name, event)
    if(event) {
      this.myTable.setFilter("name", "LIKE", event);  
    }
  }



}



interface ITerm {
  id: number,
  name: string,
  description: string,
  slug: string,
  count: number,
  weight: number,
  group: number, 
  term_taxonomy_id: number,
  taxonomy: string,

  //_children: any,
  parent: number,
}


