import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { nSQL } from "@nano-sql/core";

@Injectable({
  providedIn: 'root'
})
export class WpimportService {
   private finaldata = [];
   private apiurl = "/db.json";
   constructor(private http: HttpClient) { }

   getData() {
      return this.http.get(this.apiurl);
   }

   import() {
      this.http.get(this.apiurl).subscribe((finaldata) => {

        console.log("final data", finaldata);
        for(let table in finaldata) {
          nSQL(table).useDatabase('adal').loadJS(finaldata[table], (progress) => {
            console.log(progress) // when progress === 1 the import is done
          }).then(() => {
            console.log("Table :: '" + table + "' imported.");
          });                  
          //console.log("table :: " + table + " :: ", finaldata[table]);
        }
      });
      


   }

}
