import { Injectable } from '@angular/core';
import { nSQL } from "@nano-sql/core";
import * as utils from "@nano-sql/core/lib/utilities";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class DpdbService{

  nsql: any;

  constructor(private cookieService: CookieService) {
    this.nsql = nSQL();
  }


  checkDbExists() {
    const dbList = nSQL().listDatabases();
    if(dbList) {
      console.log();
    }
  }

  createDb(db_name) {
    this.nsql.createDatabase({
      id: db_name,
      mode: "PERM",
    }).then(() => {
      console.log('created db');
    }).catch(() => {
      console.log('error creating db');
    });
  }

  checkdptables(db_name) {
    const _tables_required = ['options', 'posts', 'terms'];
    console.log(this.nsql.useDatabase(db_name));
  }


  geteduuid() {
    //dpdb = new nSQL()
    return utils.uuid();
  }
}
