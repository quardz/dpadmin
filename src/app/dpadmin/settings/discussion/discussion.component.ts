import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'field1',
      templateOptions: { label: 'Address' },
      defaultValue: undefined,
      fieldGroup: [
        {
          key: 'town',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Town',
          },
        },
        {
          key: 'city',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'city',
          },
        },        
      ],
    },
    {
      key: 'default_category',
      type: 'select',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Default Post Category',
        options: [
          { label: 'Sunday', value: '0' },
          { label: 'Monday', value: '1' },
          { label: 'Tuesday', value: '2' },
          { label: 'Wednesday', value: '3' },
          { label: 'Thursday', value: '4' },
          { label: 'Friday', value: '5' },
          { label: 'Saturday', value: '6' },
        ],
        required: true,
      },
    },
    {
      key: 'default_post_format',
      type: 'select',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Default Post Format',
        options: [
          { label: 'Sunday', value: '0' },
          { label: 'Monday', value: '1' },
          { label: 'Tuesday', value: '2' },
          { label: 'Wednesday', value: '3' },
          { label: 'Thursday', value: '4' },
          { label: 'Friday', value: '5' },
          { label: 'Saturday', value: '6' },
        ],
        required: true,
      },
    },


  ];

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }

}
