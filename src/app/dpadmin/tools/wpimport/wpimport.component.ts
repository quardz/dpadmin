import { Component, OnInit } from '@angular/core';
import { WpimportService } from './wpimport.service';

@Component({
  selector: 'app-wpimport',
  templateUrl: './wpimport.component.html',
  styleUrls: ['./wpimport.component.scss']
})
export class WpimportComponent implements OnInit {

  public wordpressData:any;

  constructor(private wpimportservice: WpimportService) {

  }

  import() {
    console.log("starting import");
    this.wpimportservice.import();
    console.log("ending import");
  }
  

  ngOnInit(): void {

  }


}
