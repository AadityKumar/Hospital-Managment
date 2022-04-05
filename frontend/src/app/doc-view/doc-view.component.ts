import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-doc-view',
  templateUrl: './doc-view.component.html',
  styleUrls: ['./doc-view.component.css']
})
export class DocViewComponent implements OnInit {

  readData:any;
  successmsg:any;
 
  constructor(private service:ApiserviceService) { } 

 ngOnInit(): void {
   this.getAllData();  // or here function can write(get all data)
 }

 getAllData(){
  this.service.getPatDocAdm().subscribe((res)=>{
    console.log(res)
    this.readData=res.data;
  });
}

}
