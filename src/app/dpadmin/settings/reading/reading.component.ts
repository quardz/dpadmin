import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent implements OnInit {

constructor() { }

  form = new FormGroup({});

  model = {  };

  fields: FormlyFieldConfig[] = [
 
    {
      key: 'show_on_front',
      type: 'radio',
      defaultValue: 'posts',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Your homepage displays',
        required: false,
        options: [
          { label: 'Your latest posts', value: 'posts' },
          { label: 'A static page (select below)', value: 'page' },
        ],
      },
    },

    {
      key: 'page_on_front',
      type: 'select',
      defaultValue: '1',
      wrappers: ['form-field-horizontal'],
      
      templateOptions: {
        label: 'Homepage',
        required: false,
        options: [
          { label: 'Sunday', value: '0' },
          { label: 'Monday', value: '1' },
        ],
      },
    }, 

    {
      key: 'page_for_posts',
      type: 'select',
      defaultValue: '1',
      wrappers: ['form-field-horizontal'],
      hideExpression: 'model.show_on_front == "posts"',
      templateOptions: {
        label: 'Posts page',
        required: false,
        options: [
          { label: 'Sunday', value: '0' },
          { label: 'Monday', value: '1' },
        ],
      },
    },     

   {
      key: 'posts_per_page',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Blog pages show at most',
        type: 'number',
        placeholder: '',
        required: false,
        description: ''
      },
    },

    {
      key: 'posts_per_rss',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Syndication feeds show the most recent',
        type: 'number',
        placeholder: '',
        required: false,
        description: ''
      },
    },    

    {
      key: 'rss_use_excerpt',
      type: 'select',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Default Post Format',
        options: [
          { label: 'Full text', value: '0' },
          { label: 'Summary', value: '1' },
        ],
        required: true,
        description: 'Your theme determines how content is displayed in browsers. Learn more about feeds.',
      },
    }, 

    {
      key: 'blog_public',
      type: 'checkbox',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Search Engine Visibility ',
        required: false,
        options: [
          { label: 'Anyone can register', value: '0' },        
        ],
        description: 'Discourage search engines from indexing this site. It is up to search engines to honor this request.'
      },
    },      

  ];

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }


}
