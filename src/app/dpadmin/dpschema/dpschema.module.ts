import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";
import { nSQL } from "@nano-sql/core";




export const tables: InanoSQLTableConfig[] = [
    {
        name: "users",
        model: {
            "id:uuid": {pk: true},
            "age:float": {},
            "name:string[]": {},
            "meta:obj[]": {
                model: {
                    "key:string": {},
                    "value:any": {}
                }
            },
            "*:any": {}
        }
    }
];

/*

nSQL().createDatabase({
    id: "my_db",
    tables: tables
})
*/