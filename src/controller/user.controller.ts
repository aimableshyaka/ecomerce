import { Request ,Response } from "express";
import db from "../config/db";
function hello(req:Request ,res:Response){
    return res.send("Hello this user contoller");
}
export {hello}
async function createUser(req:Request ,res:Response){
    try {
        // const {username,password}=req.body;
          const { username, password } = req.body;
        // valideate if user already exists
if (!username || !password){
    return res.status(404).json({message:"usernme and password must be filled"});
}
     const [result]= await db.query("INSERT INTO users(username,password) values(?,?)",[username,password]);
    res.status(201).json({
        id:(result as any).insertId,
        username,
        password
    }) 

        
    } catch (error) {
       console.error(error);
       return res.status(500).json({message:"User Not Inserted"})        
    }
}

export {createUser};