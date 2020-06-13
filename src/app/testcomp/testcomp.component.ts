import { Component, OnInit } from '@angular/core';
import { DpdbService } from '../dpadmin/services/dpdb.service';
import { nSQL } from "@nano-sql/core";
import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";

import { TaxtableComponent } from '../dpadmin/taxtable/taxtable.component';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.scss']
})
export class TestcompComponent implements OnInit {


  temp_table = [];

  constructor(private dpdb: DpdbService) { 
  }

  testdb = nSQL();

  ngOnInit(): void {
    console.log(this.dpdb.geteduuid());

    this.dpdb.checkdptables('adal');

    this.dpdb.createDb('adal');

    this.dpdb.checkdptables('adal');
    
    const dbList = nSQL().listDatabases();
    console.log("from testcomp",dbList) // ["db1", "db2", ...] 
/*
    this.temp_table = [
      {name: "bill", age: 20},
      {name: "tom", age: 30}
    ];



    nSQL(this.temp_table).query("select").where(["age", "=", 20]).exec().then((rows) => {
    
      console.log(rows);
    }).catch((error) => {
    
    });

    //nSQL().query("select").from(this.temp_table).where(["name", "=", "jeb"]).exec();
*/
  }

}
