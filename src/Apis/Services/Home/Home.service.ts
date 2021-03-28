import {IHome} from "./Home.interface";
import pool from "../../../Configs/database";

class HomeService implements IHome{

    constructor(){
        
    }
   
    async getHome(): Promise<any>{
        return "hello world";
    }
};

export default new HomeService;
