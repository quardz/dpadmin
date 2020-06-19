import { Component, OnInit } from '@angular/core';
import { DpdbService } from '../../services/dpdb.service';

@Component({
  selector: 'app-dptools',
  templateUrl: './dptools.component.html',
  styleUrls: ['./dptools.component.scss']
})
export class DptoolsComponent implements OnInit {


  current_db: string;
  db_list: any[];
  
  constructor(private dpdbservice: DpdbService) { 
    this.current_db = 'adal';
    this.db_list = ['adal', 'arasu', 'putharachal'];
  }


  ngOnInit(): void {

  }




}
