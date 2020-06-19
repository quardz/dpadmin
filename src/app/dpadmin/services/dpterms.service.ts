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

/*
Name : Adalarasu Deivasigamani
USD 9000
3000$ for developement(3 months) and 6000$ for Go to market(6 months), paid 500$ every 2 weeks for 9 months totally 

Wallet address : 0x369799e8308bfd8d32fe4709db82af51e6f1cc60
Wallet holder full name : adalarasu deivasigamani 

Grant purpose
  To build content management system similar (UX/UI and entity structure) to wordpress but works on top of Arweave blockchaon
Milestone: copy from milestone already shared 

Contact information
  Adalarasu Deivasigamani
  Mr
  jitadal@gmail.com

  Al KyC documents


*/


