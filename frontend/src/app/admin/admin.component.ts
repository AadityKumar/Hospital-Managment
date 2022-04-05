import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    
    
  }

  userForm=new FormGroup({
      'Dname':new FormControl('',Validators.required),
      'Gender':new FormControl('',Validators.required),
      'Qualification':new FormControl('',Validators.required),
      'Specialities': new FormControl('',Validators.required),
      'Salary': new FormControl('',Validators.required),
      'Phone_no': new FormControl('',Validators.required),
      
  })
   //new user
  userSubmit(){
      if(this.userForm.valid){
          this.service.createDocAdm(this.userForm.value).subscribe((res)=>{
              this.userForm.reset();
              this.successmsg=res.message;
          })
      }else{
        this.errormsg="all field are required !"
      }
              
  }

}

