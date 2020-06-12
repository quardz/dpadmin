import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';


@Component({
  selector: 'app-postlists',
  templateUrl: './postlists.component.html',
  styleUrls: ['./postlists.component.scss']
})
export class PostlistsComponent implements OnInit {

/*
IPosts {
  ID: number,
  post_author: number,
  post_date: number,
  post_content: string,
  post_title: string,
  post_excerpt: string,
  post_status: string,
  comment_status: string,
  ping_status: string,
  post_name: string,
  post_modified: number,
  post_content_filtered: string,
  post_parent: string,
  guid: string,
  menu_order: number,
  post_type: string,
  post_mime_type: string,
  comment_count: number
}

*/

  title = 'DemoTabulator';
  posts: any[] = [];
  columnNames: any[] = [];
  myTable: Tabulator;

  tabulator_settings:any = {
    layout: 'fitColumns',
    selectable:true,
    columns:[{
      formatter:"rowSelection", 
      titleFormatter:"rowSelection", 
      align:"center", 
      headerSort:false
    },],

  };

  @Input() tableData: any[];


  constructor() {
  }

  ngOnInit() {
    this.posts = [
      { ID: 1, post_title: "FAQ", post_author: "Smith", post_categories: "Ohio,Iowa", post_tags: "Tag 1,Tag 2", comment_count: 1, weight: 0, post_date: 1591373323 },
      { id: 2, post_title: "Contact", post_author: "Doe", post_categories: "Iowa", post_tags: "Tag 1,Tag 2",comment_count: 6, weight: 1, post_date: 1590673323 },
      { id: 3, post_title: "Privacy", post_author: "Great", post_categories: "Hawaii", post_tags: "Tag 1,Tag 2",comment_count: 2, weight: 2, post_date: 1511673323 },
      { id: 4, post_title: "Terms and conditions", post_author: "Adventure", post_categories: "Arizona", post_tags: "Tag 1,Tag 2",comment_count: 0, weight: 3, post_date:1541673323 },
    ];

    this.columnNames = [
      { title: "Select", width: 40, formatter:"rowSelection", titleFormatter:"rowSelection", align:"center", headerSort:false},
      { title: "Id", field: "ID",visible:false },
      { title: "Title", field: "post_title" },
      { title: "Author", field: "post_author" },
      { title: "Author ID", field: "post_author_id",visible:false },
      { title: "Categories", field: "post_categories" },
      { title: "Tags", field: "post_tags" },
      { title: "Comments", field: "comment_count" },
      { title: "Date", field: "post_date" },
    ];

    // reference id of div where table is to be displayed (prepend #)
    
    

    this.myTable = new Tabulator("#tabulator-posts", this.tabulator_settings); 
    //this.myTable.layout(this.columnNames);
    this.myTable.setColumns(this.columnNames);
    this.myTable.setData(this.posts);
  }

}

