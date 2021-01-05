import {Router, Request, Response} from "express";
import Home from "../Controllers/Home";

const route = Router();

export default(app : Router) =>{
    app.use("/",route);
    
    route.get("/",Home.home);
}