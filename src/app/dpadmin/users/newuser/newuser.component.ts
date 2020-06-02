import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});
  model = {  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'user_login',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Username',
        type: 'text',
        placeholder: '',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Email',
        type: 'email',
        placeholder: '',
        required: false,
      },
    },    
    {
      key: 'first_name',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'First Name',
        type: 'text',
        placeholder: '',
        required: false,
      },
    },    
    {
      key: 'last_name',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Last Name',
        type: 'text',
        placeholder: '',
        required: false,
      },
    },    
    {
      key: 'url',
      type: 'input',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Website',
        type: 'url',
        placeholder: '',
        required: false,
      },
    },    

    {
      key: 'role',
      type: 'select',
      defaultValue: 'subscriber',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Role',
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
