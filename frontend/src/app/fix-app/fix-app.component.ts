import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fix-app',
  templateUrl: './fix-app.component.html',
  styleUrls: ['./fix-app.component.css']
})
export class FixAppComponent implements OnInit {

  constructor(private service:ApiserviceService, private route:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    
    
  }

  userForm=new FormGroup({
      'Dname':new FormControl('',Validators.required),
      'pname':new FormControl('',Validators.required),
      'Specialities':new FormControl('',Validators.required),
      'Schedule': new FormControl('',Validators.required),
      'Fees': new FormControl('',Validators.required),
      
      
  })
   //new user
  userSubmit(){
      if(this.userForm.valid){
          this.service.creatAppo(this.userForm.value).subscribe((res)=>{
              this.userForm.reset();
              this.successmsg=res.message;
          })
      }else{
        this.errormsg="all field are required !"
      }
              
  }

}
