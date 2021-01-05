import {Request, Response} from "express";
import pool from "../../Configs/database";
import index from "../../Configs/index";

class Home{
    private dbConn : any;
    
    constructor() {
        
    }

    public home(req : Request, res: Response) : any{
        
        return res.json({
            message: "hello world"
        })
        .status(200);
    }
};

export default new Home;