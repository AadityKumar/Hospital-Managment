const express = require('express')
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')

const app=express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'newton@5400',
    database:'HMS',    //hospital managment----->>>>
    port:3306
});

// check db connection
db.connect(err=>{
    if(err) throw err;
    console.log('connected db')
})

//  get all attribute of doctor to admin
app.get('/doc_all_data',(req,res)=>{
    let qry= "select * from doctor";    //doctor ----->>>>
    db.query(qry,(err,result)=>{
        if(err) console.log(err,'errors')
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            })
        }
    })
 })


 //  get all attribute of patient to admin and to doctor
app.get('/pat_all_data',(req,res)=>{
    let qry= "select * from patient";    //patient ----->>>>
    db.query(qry,(err,result)=>{
        if(err) console.log(err,'errors')
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            })
        }
    })
 })


 //  get selected attribute of doctor to patient
app.get('/doc-pat',(req,res)=>{
    let qry= "select doctor_id,Dname,Gender,Qualification,Specialities,Phone_no from doctor";    //doctor ----->>>>  attribute select
    db.query(qry,(err,result)=>{
        if(err) console.log(err,'errors')
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            })
        }
    })
 })



  //  get all data appointment
app.get('/app_data',(req,res)=>{
    let qry= "select * from admin";    //patient ----->>>>
    db.query(qry,(err,result)=>{
        if(err) console.log(err,'errors')
        if(result.length>0){
            res.send({
                message:'all user data',
                data:result
            })
        }
    })
 })



 //create data for doctor by admin
app.post('/create_doc',(req,res)=>{
    let id= req.body.doctor_id;
    let dname= req.body.Dname;
    let gen= req.body.Gender;
    let qual= req.body.Qualification;
    let spec= req.body.Specialities;
    let salary= req.body.Salary;
    let phone= req.body.Phone_no;

    let qr= `insert into doctor(doctor_id,Dname,Gender,Qualification,Specialities,Salary,Phone_no)
                                values(NULL,'${dname}','${gen}','${qual}','${spec}',${salary},${phone})`;
    db.query(qr,(err,result)=>{
        if(err) throw err;
        res.send({message:'data inserted'})
    })
})



 //create data for appointment by admin
 app.post('/create_appon',(req,res)=>{
    let dname= req.body.Dname;
    let pname= req.body.pname;
    let spec= req.body.Specialities;
    let sch= req.body.Schedule;
    let fess= req.body.Fees;

    let qr= `insert into admin(Dname,pname,Specialities,Schedule,Fees)
                                values('${dname}','${pname}','${spec}','${sch}',${fess})`;
    db.query(qr,(err,result)=>{
        if(err) throw err;
        res.send({message:'data inserted'})
    })
})



 //create data of patient 
 app.post('/create_pat',(req,res)=>{
    let id= req.body.patient_id;
    let pname= req.body.pname;
    let gen= req.body.Gender;
    let age= req.body.age;
    let sym= req.body.symptoms;
    let his= req.body.Patient_History;
    let pho= req.body.Phone_no;
    let emeg= req.body.Emergency_call;

    let qr= `insert into patient(patient_id,pname,Gender,age,symptoms,Patient_History,Phone_no,Emergency_call)
                                values(NULL,'${pname}','${gen}',${age},'${sym}','${his}',${pho},'${emeg}')`;
    db.query(qr,(err,result)=>{
        if(err) throw err;
        res.send({message:'data inserted'})
    })
})


// //delete data of appontment
// app.delete('/det_app/:id',(req,res)=>{
//     let gid=req.params.id;

//     let qr= `delete from admin where id='${gid}'`;
//     db.query(qr,(err,result)=>{
//         if(err) throw err;
//         res.send({message:'data deleted'})
//     })
// })

// //delete data of doctor
// app.delete('/det_doc/:id',(req,res)=>{
//     let gid=req.params.id;

//     let qr= `delete from doctor where doctor_id='${gid}'`;
//     db.query(qr,(err,result)=>{
//         if(err) throw err;
//         res.send({message:'data deleted'})
//     })
// })

// //delete data of patient
// app.delete('/det_pat/:id',(req,res)=>{
//     let gid=req.params.patient_id;

//     let qr= `delete from patient where id='${gid}'`;
//     db.query(qr,(err,result)=>{
//         if(err) throw err;
//         res.send({message:'data deleted'})
//     })
// })

app.listen(3000);