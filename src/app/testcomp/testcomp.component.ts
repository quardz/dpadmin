import { Component, OnInit } from '@angular/core';
import { DpdbService } from '../dpadmin/services/dpdb.service';
import { nSQL } from "@nano-sql/core";
import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";
import { DPtables } from "../dpadmin/dpschema/dpschema.module";
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
    //console.log(this.dpdb.geteduuid());
    //console.log(this.dpdb.checkdptables);

    //this.dpdb.checkdptables('adal');



    //this.dpdb.createDb('adal');

    //this.testdb.checkdptables('adal');
    
  
  }

}
