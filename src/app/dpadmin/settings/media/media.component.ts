import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor() { }

  form = new FormGroup({});

  model = {};

  fields: FormlyFieldConfig[] = [

    {
      className: 'section-label',
      template: '<hr /><div><strong>Thumbnail size:</strong></div>',
    },

    {
      key: 'group1',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'thumbnail_size_w',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 150,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Width',
          },
        },
        {
          key: 'thumbnail_size_h',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 150,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Height',
          },
        },
        {
          key: 'thumbnail_crop',
          type: 'checkbox',
          wrappers: ['form-field-horizontal'],
          templateOptions: {
            required: false,
            type: 'checkbox',
            label: ' Crop thumbnail to exact dimensions (normally thumbnails are proportional)',
          },
        },        
      ],
    },

    //Section 2

    {
      className: 'section-label',
      template: '<hr /><div><strong>Medium size:</strong></div>',
    },

    {
      key: 'group1',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'medium_size_w',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 300,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Max Width',
          },
        },
        {
          key: 'medium_size_h',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 300,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Max Height',
          },
        },
      ],
    },

    //Section 3

    {
      className: 'section-label',
      template: '<hr /><div><strong>Large size:</strong></div>',
    },

    {
      key: 'group1',
      //      defaultValue: undefined,
      //description: '(These settings may be overridden for individual posts.)',
      fieldGroupClassName: 'hidechecklabel',

      fieldGroup: [

        {
          key: 'large_size_w',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 1024,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Max Width',
          },
        },
        {
          key: 'large_size_h',
          type: 'input',
          wrappers: ['form-field-horizontal'],
          defaultValue: 1024,
          templateOptions: {
            required: true,
            type: 'number',
            label: 'Max Height',
          },
        },
      ],
    },        

    //Section 4 Uploading Files

    {
      className: 'section-label',
      template: '<hr /><div><strong>Uploading Files:</strong></div>',
    },
    {
      key: 'thumbnail_crop',
      type: 'checkbox',
      wrappers: ['form-field-horizontal'],
      templateOptions: {
        required: false,
        type: 'checkbox',
        label: ' Crop thumbnail to exact dimensions (normally thumbnails are proportional)',
      },        
    },

 ];

  onSubmit() {
    console.log(this.model);
  }


  ngOnInit(): void {
  }
}