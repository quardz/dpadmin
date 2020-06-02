import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});

  model = {};

  fields: FormlyFieldConfig[] = [

    {
      className: 'section-label',
      template: '<hr /><div><strong>Default post settings:</strong></div>',
    },

    {
      key: 'group1',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'default_pingback_flag',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Attempt to notify any blogs linked to from the post',
          },
        },
        {
          key: 'default_ping_status',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Allow link notifications from other blogs (pingbacks and trackbacks) on new posts',
          },
        },
        {
          key: 'default_comment_status',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'text',
            label: ' Allow people to submit comments on new posts',
          },
        },
      ],
    },

    //Section 2

    {
      className: 'section-label',
      template: '<hr /><div><strong>Other comment settings:</strong></div>',
    },
    {
      key: 'group2',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'require_name_email',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Comment author must fill out name and email',
            value: '1',
          },
        },
        {
          key: 'comment_registration',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Users must be registered and logged in to comment',
            value: '1',
          },
        },  
        {
          key: 'close_comments_for_old_posts_group',
          fieldGroupClassName: 'close_comments_for_old_posts_group',
          fieldGroup: [
            {
              key: 'close_comments_for_old_posts',
              type: 'checkbox',
              wrappers: ['form-field-horizontal'],
              templateOptions: {
                required: false,
                type: 'checkbox',
                label: 'Automatically close comments on posts older than',
                value: '1',
              },           
            },
            {
              key: 'close_comments_days_old',
              type: 'input',
              //wrappers: ['form-field-horizontal'],
              defaultValue: 14,
              templateOptions: {
                label: 'days',
                type: 'number',
                placeholder: '',
                required: true,
                description: ''
              },
            },            
          ],
        },
        {
          key: 'show_comments_cookies_opt_in',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Show comments cookies opt-in checkbox, allowing comment author cookies to be set',
            value: '1',
          },
        },     
        {
          key: 'thread_comments_group',
          fieldGroupClassName: 'thread_comments_group',
          fieldGroup: [
            {
              key: 'thread_comments',
              type: 'checkbox',
              wrappers: ['form-field-horizontal'],
              templateOptions: {
                required: false,
                type: 'checkbox',
                label: 'Enable threaded (nested) comments',
                value: '1',
              },           
            },
            {
              key: 'thread_comments_depth',
              type: 'select',
              //wrappers: ['form-field-horizontal'],
              defaultValue: 7,
              templateOptions: {
                label: 'levels depth',
                required: false,
                options: [
                  { label: '2', value: 2 },
                  { label: '3', value: 3 },
                  { label: '4', value: 4 },
                  { label: '5', value: 5 },
                  { label: '6', value: 6 },
                  { label: '7', value: 7 },
                  { label: '8', value: 8 },
                  { label: '9', value: 9 },
                  { label: '10', value: 10 },
                ],
              },
            },            
          ],
        },  
        {
          key: 'page_comments_group',
          fieldGroupClassName: 'page_comments_group',
          fieldGroup: [
            {
              key: 'page_comments',
              type: 'checkbox',
              wrappers: ['form-field-horizontal'],
              templateOptions: {
                required: false,
                type: 'checkbox',
                label: 'Break comments into pages with',
                value: '1',
              },           
            },
            {
              key: 'comments_per_page',
              type: 'input',
              //wrappers: ['form-field-horizontal'],
              defaultValue: 50,
              templateOptions: {
                label: 'top level comments per page and the',
                required: false,
              },
            },   
            {
              key: 'default_comments_page',
              type: 'select',
              //wrappers: ['form-field-horizontal'],
              defaultValue: 'oldest',
              templateOptions: {
                label: 'page displayed by default Comments should be displayed with the',
                required: false,
                options: [
                  { label: 'newest', value: 'last' },
                  { label: 'oldest', value: 'first' },
                ],
              },
            },   
            {
              key: 'comment_order',
              type: 'select',
              //wrappers: ['form-field-horizontal'],
              defaultValue: 'asc',
              templateOptions: {
                label: 'comments at the top of each page',
                required: false,
                options: [
                  { label: 'asc', value: 'older' },
                  { label: 'desc', value: 'newer' },
                ],
              },
            },                                    
          ],
        },                          
      ]
    },


    //Section 3 Email me whenever
    {
      className: 'section-label',
      template: '<hr /><div><strong>Email me whenever:</strong></div>',
    },    
    {
      key: 'group3',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'comments_notify',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Anyone posts a comment',
          },
        },
        {
          key: 'moderation_notify',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'A comment is held for moderation',
          },
        },
      ],
    },

    //Section 4 Before a comment appears  
    {
      className: 'section-label',
      template: '<hr /><div><strong>Before a comment appears:</strong></div>',
    },    
    {
      key: 'group4',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'comment_moderation',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: ' Comment must be manually approved',
          },
        },
        {
          key: 'comment_whitelist',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: 'Comment author must have a previously approved comment',
          },
        },
      ],
    },

    //Section 5 Before a comment appears  
    {
      className: 'section-label',
      template: '<hr /><div><strong>Before a comment appears:</strong></div>',
    },       
  ];

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }

}

