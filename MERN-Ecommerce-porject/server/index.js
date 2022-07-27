// const express=require("express");
import  express  from "express";
import dotenv from "dotenv"
import Connection from "./database/db.js";
import DefaultData from "./default.js";
const app=express();
dotenv.config();
const port=8080;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);

app.listen(port,()=> console.log(`server is running successfully on port ${port}`))
DefaultData()