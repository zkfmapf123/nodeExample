import {Request, Response} from "express";
import HomeService from "../Services/Home/Home.service";


const home = async(req: Request, res : Response) : Promise<any> =>{
    try{
        const result = await HomeService.getHome();

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
