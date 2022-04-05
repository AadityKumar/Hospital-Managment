import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
   readData:any;
   successmsg:any;

  ngOnInit(): void {
    this.getAllData();  // or here function can write(get all data)
  }

  //get all data
  getAllData(){
    this.service.getDocPat().subscribe((res)=>{
      console.log(res)
      this.readData=res.data;
    });
  }


}
