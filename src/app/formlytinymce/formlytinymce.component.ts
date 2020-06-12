import { Component, ViewChild, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

const valid_elements = [
  'a[href|target=_blank]',
  'strong/b',
  'div[align]',
  'br',
  'p',
  'ul',
  'li'
].join(',');

const defaultConfig = {
  branding: false,
  menubar: false,
  plugins: [  'advlist autolink lists link image charmap print preview anchor textcolor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code help wordcount'],
  skin: 'lightgray',
  theme: 'modern',
    toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
  inline: false,
  valid_elements,
  height: 100
};
 

@Component({
  selector: 'app-formlytinymce',
  templateUrl: './formlytinymce.component.html',
  styleUrls: ['./formlytinymce.component.scss'] 
})

export class FormlytinymceComponent extends FieldType {
  public config = { ...defaultConfig };

  //ngOnInit() {
    //super.ngOnInit();
  //}
}
