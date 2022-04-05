import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  // connect front to backend
  // apiUrl = 'http://localhost:300/det';

   //  get all attribute of doctor to admin
  getDocAdm():Observable<any>{
    return this.http.get('http://localhost:3000/doc_all_data');
  }


  //  get all attribute of patient to admin and to doctor
getPatDocAdm():Observable<any>{
  return this.http.get('http://localhost:3000/pat_all_data');
}


  //  get selected attribute of doctor to patient
getDocPat():Observable<any>{
  return this.http.get('http://localhost:3000/doc-pat');
}

  //  get all data appointment
  getAppData():Observable<any>{
    return this.http.get('http://localhost:3000/app_data');
  }

  //create data for doctor by admin
  createDocAdm(data:any):Observable<any>{
     return this.http.post('http://localhost:3000/create_doc',data);
  }


  //create data for appontment by admin
  creatAppo(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/create_appon',data);
 }


  //create data of patient 
  creaPatAdm(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/create_pat',data);
 }


  //delete data appontment
  deleteAppData(id:any):Observable<any>{
    let ids=id;
     return this.http.delete('http://localhost:3000/det_app/:id')
  }

   //delete data doctor
   deleteDocData(id:any):Observable<any>{
    let ids=id;
     return this.http.delete('http://localhost:3000/det_doc/:id')
  }

   //delete data patient
   deletePatData(id:any):Observable<any>{
    let ids=id;
     return this.http.delete('http://localhost:3000/det_pat/:id')
  }
}
