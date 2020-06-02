import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-taxonomy',
  templateUrl: './taxonomy.component.html',
  styleUrls: ['./taxonomy.component.scss']
})

export class TaxonomyComponent implements OnInit {

  constructor() { }

  @Input() taxonomy_machine_name: string = 'category';
  @Input() taxonomy_name: string = 'Category';
  @Input() display_parent: boolean = false;


  form = new FormGroup({});
  model = {  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'tag_name',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Name',
        type: 'text',
        placeholder: '',
        required: true,
        description: 'The name is how it appears on your site.',
      },
    },
    {
      key: 'tag_slug',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Slug',
        type: 'text',
        placeholder: '',
        required: false,
        description: 'The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.',
      },
    },
    {
      key: 'parent',
      type: 'select',
      className: this.display_parent ? 'display' : 'hidden', 
      defaultValue: 'subscriber',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Parent Category',
        required: false,
        description: this.taxonomy_name + ', unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.',
        options: [
          { label: 'Subscriber', value: 'subscriber' },
          { label: 'Contributor', value: 'contributor' },
          { label: 'Author', value: 'author' },
          { label: 'Editor', value: 'editor' },
          { label: 'Administrator', value: 'administrator' },
        ],
      },
    },       

    {
      key: 'description',
      type: 'textarea',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Description',
        type: 'textarea',
        placeholder: '',
        required: false,
        description: 'The description is not prominent by default; however, some themes may show it.',
      },
    },    

  ];

  onSubmit() {
    console.log(this.model);
  }

  ngOnInit(): void {
  }

}
