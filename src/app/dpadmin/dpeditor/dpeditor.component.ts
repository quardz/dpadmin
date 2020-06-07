import { Component, OnInit } from '@angular/core';
//import { iDpeditor } from 'src/app/dpadmin/models/iDpeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-dpeditor',
  templateUrl: './dpeditor.component.html',
  styleUrls: ['./dpeditor.component.scss']
})
export class DpeditorComponent implements OnInit {



  constructor() {


  }


  ngOnInit(): void {
  }

  onSubmit() {

    console.log("meow");
  }




}







