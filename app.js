const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

let patients = [];
let appointments = [];

app.get("/", (req,res)=>res.send("Backend works"));

app.post("/patient/create", (req,res)=>{
 const patient = {id: uuid(), ...req.body};
 patients.push(patient);
 res.json(patient);
});

app.get("/patient/list",(req,res)=>res.json(patients));

app.post("/appointment/create",(req,res)=>{
 const item = {id: uuid(), ...req.body};
 appointments.push(item);
 res.json(item);
});

app.get("/appointment/list",(req,res)=>res.json(appointments));

app.listen(3000, ()=>console.log("Server running"));
