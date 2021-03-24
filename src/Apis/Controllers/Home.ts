import {Request, Response} from "express";
import pool from "../../Configs/database";
import index from "../../Configs/index";
import HomeService from "../Services/Home/HomeService";

const homeService : HomeService = new HomeService();

const home = async(req: Request, res : Response) : Promise<any> =>{
    try{
        const result = await homeService.getHome();

        return res.status(200).json({
            result
        });
    }catch(e){
        console.error(e);  
    }
};

export default {
    home
}
