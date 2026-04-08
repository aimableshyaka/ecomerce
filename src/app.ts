import express  from "express";
import userRoute from "./routes/user.router";
const app=express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/user",userRoute);

export {app};