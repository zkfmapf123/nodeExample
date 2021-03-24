import {IHome} from "./Home.interface";

class HomeService implements IHome{

    constructor(){
        console.log("HomeService");
    }
   
    async getHome(): Promise<any>{
        return "hello world";
    }
};

export default HomeService;
