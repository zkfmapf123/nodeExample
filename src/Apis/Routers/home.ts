import {Router, Request, Response} from "express";
import HomeController from "../Controllers/Home";

const route = Router();

export default(app : Router) =>{
    app.use("/",route);
    
    route.get("/",HomeController.home);
}