import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-doc-adm',
  templateUrl: './doc-adm.component.html',
  styleUrls: ['./doc-adm.component.css']
})
export class DocAdmComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
   readData:any;
   successmsg:any;

  ngOnInit(): void {
    this.getAllData();  // or here function can write(get all data)
  }
  
  // delete data by id
  // deleteID(id:any){
  //   this.service.deleteData(id).subscribe((res)=>{
  //       this.successmsg=res.message;
  //       this.getAllData();   // use here so, after delete all data get update simultaniously
  //   })
  // }


  //get all data
  getAllData(){
    this.service.getDocAdm().subscribe((res)=>{
      console.log(res)
      this.readData=res.data;
    });
  }


   // delete data by id
   deleteID(id:any){
    this.service.deleteDocData(id).subscribe((res)=>{
        this.successmsg=res.message;
        this.getAllData();   // use here so, after delete all data get update simultaniously
    })
  }

}