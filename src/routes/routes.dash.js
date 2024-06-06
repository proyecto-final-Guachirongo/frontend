import { Router } from "express";

const rutaDash = Router();

rutaDash.get("/", (req,res)=>{
    res.send("<h1> este es mi dashboard </h1>")
})

rutaDash.get("/user", (req,res)=>{
    res.send("<h1> contactos </h1>")
})

export default rutaDash;