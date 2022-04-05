import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pat-form',
  templateUrl: './pat-form.component.html',
  styleUrls: ['./pat-form.component.css']
})
export class PatFormComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    
    
  }

  userForm=new FormGroup({
      'pname':new FormControl('',Validators.required),
      'Gender':new FormControl('',Validators.required),
      'age':new FormControl('',Validators.required),
      'symptoms': new FormControl('',Validators.required),
      'Patient_History': new FormControl('',Validators.required),
      'Phone_no': new FormControl('',Validators.required),
      'Emergency_call': new FormControl('',Validators.required),
      
  })
   //new user
  userSubmit(){
      if(this.userForm.valid){
          this.service.creaPatAdm(this.userForm.value).subscribe((res)=>{
              this.userForm.reset();
              this.successmsg=res.message;
          })
      }else{
        this.errormsg="all field are required !"
      }
              
  }

}
