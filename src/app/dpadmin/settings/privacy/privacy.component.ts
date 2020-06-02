import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor() { }


  form = new FormGroup({});

  model = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'page_for_privacy_policy',
      type: 'select',
      wrappers: ['form-field-horizontal'],
      defaultValue: 7,
      templateOptions: {
        label: 'Change your Privacy Policy page',
        required: false,
        options: [
          { label: '2', value: 2 },
          { label: '3', value: 3 },
        ],
      },
    },    
  ];

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
