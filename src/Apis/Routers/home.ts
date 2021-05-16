import {Router, Request, Response} from "express";
import HomeController from "../Controllers/home.controller";
import { verifyHome } from "../Middleware/home.middleware";
import { Eurl } from "./url";
const route = Router();

export default(app : Router) =>{
    app.use(Eurl.home,route);
    
    route.get(Eurl.home,HomeController.home);
}