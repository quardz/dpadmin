import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-permalink',
  templateUrl: './permalink.component.html',
  styleUrls: ['./permalink.component.scss']
})
export class PermalinkComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});

  model = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'selection',
      type: 'radio',
      defaultValue: 'posts',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Your homepage displays',
        required: false,
        options: [
          { 
            label: 'Plain www.yourwebsite.com/?p=123', 
            value: '' 
          },
          { label: 'Day and name http://www.yourwebsite.com/2020/06/02/sample-post/', 
            value: '/%year%/%monthnum%/%day%/%postname%/' 
          },
          { label: 'Month and name http://www.yourwebsite.com/2020/06/sample-post/', 
            value: '/%year%/%monthnum%/%postname%/' 
          },
          { label: 'Numeric http://www.yourwebsite.com/archives/123', 
            value: '/archives/%post_id%' 
          },
          { label: 'Post name http://www.yourwebsite.com/sample-post/', 
            value: '/%postname%/' 
          },
          { label: 'Custom Structure http://www.yourwebsite.com/2020/06/02/sample-post/', 
            value: 'custom' 
          },                                        
        ],
      },
    },

    {
      className: 'section-label',
      template: '<hr /><div><strong>Optional:</strong></div>',
    },    

    {
      className: 'section-text',
      template: '<div class = "desc">If you like, you may enter custom structures for your category and tag URLs here. For example, using topics as your category base would make your category links like http://wptest1.quardz.com/topics/uncategorized/. If you leave these blank the defaults will be used.</div>',
    },    
    {
      key: 'group3',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      //fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'category_base',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: '',
          templateOptions: {
            label: 'Category base',
            type: 'text',
            placeholder: '',
            required: false,
            description: ''
          },
        },
        {
          key: 'tag_base',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: '',
          templateOptions: {
            label: 'Tag base',
            type: 'text',
            placeholder: '',
            required: false,
            description: ''
          },
        },          
      ],
    },

  ];

  onSubmit() {
    console.log(this.model);
  }  

  ngOnInit(): void {
  }

}
