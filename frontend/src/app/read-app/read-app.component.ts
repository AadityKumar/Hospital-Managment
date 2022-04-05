import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-read-app',
  templateUrl: './read-app.component.html',
  styleUrls: ['./read-app.component.css']
})
export class ReadAppComponent implements OnInit {
  readData:any;
  successmsg:any;
 
  constructor(private service:ApiserviceService) { } 

 ngOnInit(): void {
   this.getAllData();  // or here function can write(get all data)
 }

 getAllData(){
  this.service.getAppData().subscribe((res)=>{
    console.log(res)
    this.readData=res.data;
  });
}

}