import express  from "express";
import { hello ,createUser} from "../controller/user.controller";
const userRoute = express.Router();
 
userRoute.get("/",hello);
userRoute.post("/",createUser)
export default userRoute;