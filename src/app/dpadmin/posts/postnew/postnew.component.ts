import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EditorModule } from '@tinymce/tinymce-angular';



@Component({
  selector: 'app-postnew',
  templateUrl: './postnew.component.html',
  styleUrls: ['./postnew.component.scss']
})
export class PostnewComponent implements OnInit { 

  constructor() { }

  @Input() post_type: string = 'post';
  @Input() form_type: string = 'add';
  @Input() post_id: number = 0;

  


  form = new FormGroup({});
  model = { };
  fields: FormlyFieldConfig[] = [
    {
      key: 'post_title',
      type: 'input',
      //wrappers: ['form-field-horizontal'],
      templateOptions: {
        label: 'Title',
        type: 'text',
        placeholder: 'Title of this page/post',
        required: true,
      },
    },
    {
      key: 'post_content',
      type: 'formlytinymce',
      templateOptions: {
        initialValue: 'I am a tinyMCE! Click me',
      },
    },

  ];

  onClickSubmit(formData) {
    console.log(formData.post_title, formData);
  }



  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
