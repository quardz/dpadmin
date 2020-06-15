import { Injectable } from '@angular/core';
import { nSQL } from "@nano-sql/core";
import * as utils from "@nano-sql/core/lib/utilities";
import { CookieService } from 'ngx-cookie-service';
import { DPtables } from "../dpschema/dpschema.module";
import * as _ from 'underscore';


@Injectable({
  providedIn: 'root'
})
export class DpdbService{

  nsql: any;
  db_name: string = 'adal';

  constructor(private cookieService: CookieService) {
    this.nsql = nSQL();
    this.createdbwithdata('adal');
    
    //this.createtables('adal');
  }

  //First time, create database if non exists 
  //if db exists, try to check if this db belongs to DP 
  //IF db exists, try check the tables are right 



  checkDbExists() {
    const dbList = this.nsql.listDatabases();
    if(dbList) {
      
    }
  }

  createdbwithdata(db_name) {
    nSQL().createDatabase({
      id: db_name,
      mode: "PERM",
      tables: DPtables,
    })
    .then(()=>{
      return nSQL().useDatabase(db_name).query("show tables").exec();
    })    
    .then((tables)=>{
      console.log("tables", tables);
      return nSQL("users").query("upsert", {user_login: "Jeb", user_registered: 20}).exec();
    })
    .then(() => {
      return nSQL("users").query("select").exec();
    })
    .then((rows) => {
      console.log(rows);
    })
    .catch(() => {
      console.log('error creating db');
    });    
  }

  createDb(db_name) {
    this.nsql.createDatabase({
      id: db_name,
      mode: "PERM",

    })
    .then(() => {
      for(let i in DPtables) {
        var _table = DPtables[i];
        nSQL().useDatabase(db_name).query("create table", {
          name: _table.name,
          model: _table.model
        }).exec().then((_t)=>{
          console.log("create table sucsess", _t);
        }).catch((_f)=>{
          console.log("create table failed", _f);
        });
        console.log("created table : ", _table.name);
      }      
    })
    .then(()=>{
      nSQL().useDatabase(db_name).query("show tables").exec().then((rows) => {
        console.log(rows);
      });

    })
    .catch(() => {
      console.log('error creating db');
    });
  }

  createtables(_db_name) {
    this.nsql.useDatabase(_db_name);
    const dbList = this.nsql.listDatabases();
    console.log("DB List", dbList);
    //this.nsql.useDatabase(_db_name);

    for(let i in DPtables) {
      var _table = DPtables[i];
      nSQL().useDatabase(_db_name).query("create table", {
        name: _table.name,
        model: _table.model
      }).exec();
    }

    /*
    DPtables.forEach(function(table) {


      this.nsql.query("create table", {
        name: table.name,
        model: table.model
      }).exec().then((rows) => {
        console.log(rows); // [{id: "xxx", name: "Jeb"}]
      });
      //console.log("table : ", table.name, table.model);
      //this.createtable(_db_name, table.name, table.model);
    });    
    */
    
  }

  createtable(_db_name, _table_name, _model) {
    

  }
/*
  checkTableExist(table_name) {
    this.nsql.useDatabase(db_name);
    this.nsql.query("show tables").exec().then((rows) => {
      rows.forEach(function(row) {

        if(row.table == table_name) {
          return true
        }
      });
    });
    
  }
*/
  checkdptables(db_name) {
    const _tables_required = ['options', 'posts', 'terms'];
    this.nsql.useDatabase(db_name);
    this.nsql.query("show tables").exec().then((rows) => {
      console.log(rows);
    });
    DPtables.forEach(function(table){  

    })

  }


  geteduuid() {
    console.log("DB tables : ", DPtables);
    //dpdb = new nSQL()
    return utils.uuid();

  }
}
