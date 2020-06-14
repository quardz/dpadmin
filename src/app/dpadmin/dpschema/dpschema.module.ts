import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";
import { nSQL } from "@nano-sql/core";




export const DPtables: InanoSQLTableConfig[] = [
    //User table
    { 
        name: "users",
        model: {
            "ID:int": {pk: true, ai: true},
            "user_login:string": {},
            "user_pass:string": {},
            "user_nicename:string": {},
            "user_email:string": {},
            "user_url:string": {},
            "user_registered:int": {min:0},
            "user_activation_key:string": {},
            "user_status:int": {default:0},
            "display_name:string": {},
            "metatbl:any": {
                model: {
                    "umeta_id:int": {pk: true, ai: true},
                    "user_id:int": {},
                    "meta_key:string": {},
                    "meta_value:blob": {},
                }
            }
        }
    },

    //Users meta
    {
        name: "usermeta",
        model: {
            "umeta_id:int": {pk: true, ai: true},
            "user_id:int": {},
            "meta_key:string": {},
            "meta_value:blob": {},
        }        
    }

    //Posts tables 
    

];

/*

nSQL().createDatabase({
    id: "my_db",
    tables: tables
})
*/