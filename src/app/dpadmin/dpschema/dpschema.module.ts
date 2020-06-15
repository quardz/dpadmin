import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InanoSQLTableConfig } from "@nano-sql/core/lib/interfaces";
import { nSQL } from "@nano-sql/core";




export const DPtables: InanoSQLTableConfig[] = [
    // Options table
    {
        name: "options",
        model: {
            "option_id:int": {pk: true, ai: true},
            "option_name:string": {},
            "option_value:blob": {},
            "autoload:string": {default:"yes"},

        }
    },
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
    },
    //Post tables
    { 
        name: "posts",
        model: {
            "ID:int": {pk: true, ai: true},
            "post_author:int": {},
            "post_date:int": {},
            "post_content:blob": {},
            "post_title:string": {},
            "post_excerpt:blob": {},
            "post_status:string": {},
            "comment_status:string": {},
            "ping_status:int": {default:0},
            "post_password:string": {},
            "post_name:string": {},
            "to_ping:string": {},
            "pinged:string": {},
            "post_modified:int": {},
            "post_content_filtered:blog": {},
            "post_parent:int": {},
            "guid:string": {},
            "menu_order:int": {},
            "post_type:string": {},
            "post_mime_type:string": {},
            "comment_count:int": {},
            "metatbl:any": {
                model: {
                    "meta_id:int": {pk: true, ai: true},
                    "post_id:int": {},
                    "meta_key:string": {},
                    "meta_value:blob": {},
                }
            }
        }
    },
    {
        name: "postmeta",
        model: {
            "meta_id:int": {pk: true, ai: true},
            "post_id:int": {},
            "meta_key:string": {},
            "meta_value:blob": {},
        }        
    },    

    //Terms table 
    {
        name: "terms",
        model: {
            "term_id:int": {pk: true, ai: true},
            "name:string": {},
            "slug:string": {},
            "term_group:int": {default: 0},
        }              
    },
    //term_taxonomy table 
    {
        name: "term_taxonomy",
        model: {
            "term_taxonomy_id:int": {pk: true, ai: true},
            "term_id:int": {default: 0},
            "taxonomy:string": {},
            "description:blob": {},
            "parent:int": {default: 0},
            "count:int": {default: 0},
        }              
    },
    //term_relationships table 
    {
        name: "term_relationships",
        model: {
            "object_id:int": {pk: true, ai: true, default: 0},
            "term_taxonomy_id:int": {pk: true, default: 0},
            "term_order:int": {default: 0},
        }              
    },
    //Term meta
    {
        name: "termmeta",
        model: {
            "meta_id:int": {pk: true, ai: true},
            "term_id:int": {},
            "meta_key:string": {},
            "meta_value:blob": {},
        }        
    },

    //Links tables 
    {
        name: "links",
        model: {
            "link_id:int": {pk: true, ai: true},
            "link_url:string": {},
            "link_name:string": {},
            "link_image:string": {},
            "link_target:string": {},
            "link_description:string": {},
            "link_visible:string": {},
            "link_owner:int": {},
            "link_rating:int": {},
            "link_updated:int": {},
            "link_rel:string": {},
            "link_notes:blob": {},
            "link_rss:string": {},
        }        
    },

    //comments tables 
    {
        name: "comments",
        model: {
            "comment_ID:int": {pk: true, ai: true},
            "comment_post_ID:int": {default:0},
            "comment_author:string": {},
            "comment_author_email:string": {},
            "comment_author_url:string": {},
            //"comment_author_IP:string": {},
            "comment_date:int": {},
            "comment_content:string": {},
            "comment_karma:int": {default:0},
            "comment_approved:string": {default:"1"},
            "comment_agent:string": {},
            "comment_type:string": {},
            "comment_parent:int": {default:0},
            "user_id:int": {default:0},
        }        
    },
    //comments meta
    {
        name: "commentmeta",
        model: {
            "meta_id:int": {pk: true, ai: true},
            "comment_id:int": {},
            "meta_key:string": {},
            "meta_value:blob": {},
        }        
    },
];

/*

nSQL().createDatabase({
    id: "my_db",
    tables: tables
})
*/