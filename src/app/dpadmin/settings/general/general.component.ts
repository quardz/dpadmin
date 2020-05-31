import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'blogname',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Site Title',
        type: 'text',
        placeholder: 'Website name',
        required: true,
      },
    },
    {
      key: 'blogdescription',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Tagline',
        type: 'text',
        placeholder: '',
        required: false,
        description: 'In a few words, explain what this site is about.'
      },
    },
    {
      key: 'siteurl',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'WordPress Address (URL)',
        type: 'url',
        placeholder: '',
        required: false,
        description: ''
      },
    },
    {
      key: 'home',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Site Address (URL)',
        type: 'url',
        placeholder: '',
        required: false,
        description: ''
      },
    },
    {
      key: 'new_admin_email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Administration Email Address',
        type: 'text',
        placeholder: '',
        required: false,
        description: 'This address is used for admin purposes. If you change this, we will send you an email at your new address to confirm it. The new address will not become active until confirmed.'
      },
    },
    {
      key: 'users_can_register',
      type: 'checkbox',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Anyone can register',
        required: false,
      },
    },
    
    {
      key: 'default_role',
      type: 'select',
      defaultValue: 'subscriber',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'New User Default Role',
        required: false,
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
      key: 'date_format',
      type: 'radio',
      defaultValue: 'subscriber',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'New User Default Role',
        required: false,
        options: [
          { label: 'Subscriber', value: 'subscriber' },
          { label: 'Contributor', value: 'contributor' },
          { label: 'Author', value: 'author' },
          { label: 'Editor', value: 'editor' },
          { label: 'Administrator', value: 'administrator' },
        ],
      },
    },

  ];

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }

}
