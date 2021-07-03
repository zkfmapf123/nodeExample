import * as mysql2 from "mysql2/promise";
import config from "../Configs/index";

//mysql
const dbConfig = {
    host : config.db_host,
    user : config.db_user,
    password : config.db_password,
    database : "design",
    port : +config.db_port,
    connectionLimit : 10,
    waitForConnections : true
};

//redis
const redisConfig = {

}

export default(db : "mysql2" | "redis")=>{
    if(db === "mysql2"){
        return mysql2.createPool(dbConfig);    
    }else{
        //아직 없음
        return mysql2.createPool(redisConfig);
    }
}

