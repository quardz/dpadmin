import { Injectable } from '@angular/core';
import { nSQL } from "@nano-sql/core";

@Injectable({
  providedIn: 'root'
})
export class DptermsService {

  taxonomies: any[] = [];

  constructor() { }

  getTermstree(taxonomy:string, database: string){
    nSQL().useDatabase(database);
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
      return rows;
    });


  }
}





