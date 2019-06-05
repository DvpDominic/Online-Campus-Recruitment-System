var myapp = require("firebase");
const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());;
var config = {
    apiKey: "AIzaSyC80Lvc6lE4BE5z3Yc0fsctE828CtJqZ1E",
    authDomain: "senproject-1da2c.firebaseapp.com",
    databaseURL: "https://senproject-1da2c.firebaseio.com",
    projectId: "senproject-1da2c",
    storageBucket: "senproject-1da2c.appspot.com",
    messagingSenderId: "416869744106"
  };

myapp.initializeApp(config);

var auth=myapp.auth();
var database=myapp.database();
app.post('/comdata',(req,res)=>{
    database.ref("company").once("value").then((snapshot)=>{
        res.json(snapshot.val());
    })
})
app.post('/company',(req,res)=>{
    database.ref("company").once("value").then((snapshot)=>{
        snapshot.forEach((csnapshot)=>{
            if(csnapshot.key==req.body.uid)
                res.json(csnapshot.val());
        })
    })
})

app.post('/studata',(req,res)=>{
    database.ref("student").once("value").then((snapshot)=>{
    res.json(snapshot.val());
    })
   })
   
app.post('/signin',(req,res)=>{
    //console.log("yo");
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
    .then((cuser)=>{
            let uid=cuser.user.uid;
            let istudent=false;
            database.ref("student").once('value').then((snapshot)=>{
                snapshot.forEach((csnapshot)=>{
                    if(csnapshot.key==uid)
                        {res.json(csnapshot.val());istudent=true;}
                })
                if(!istudent)
                {
                    let icompany=false;
                    database.ref("company").once('value').then((snapshot)=>{
                        snapshot.forEach((csnapshot)=>{
                            if(csnapshot.key==uid)
                                {res.json(csnapshot.val());icompany=true;}
                        })
                        if(!icompany)
                        res.status(400).json();
                    })
                    .catch(error=>res.status(400).json())
                }
             })
             .catch((error)=>res.status(400).json());
            })
    .catch((error)=>res.status(400).json());
});

app.listen(3001,()=>{
    console.log("app is running in port 3001");
});