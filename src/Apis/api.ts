import {Router} from "express";
import home from "./Routers/home";

export default ()=>{
    const app = Router();
    home(app);

    return app;
}