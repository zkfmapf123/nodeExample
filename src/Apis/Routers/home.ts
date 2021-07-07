import {Router, Request, Response} from "express";
import { verifyHome } from "../Middleware/home.middleware";
const route = Router();

export default(app : Router) =>{
    app.use("/",route);
    
    route.get("/", (req: Request, res: Response) => {
        res.send("home");
    });
}