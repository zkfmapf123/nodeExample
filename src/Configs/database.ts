import * as mysql2 from "mysql2/promise";
import redis from "redis";
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
// not use docker "https://redis-server.com" 
// use docker     "redis-server"                    (docker compose)
const redisConfig = {
    host: config.redis_host,
    port: +config.redis_port
};


export default(db : "mysql2" | "redis")=>{
    if(db === "mysql2"){
        return mysql2.createPool(dbConfig);    
    }else{
        return redis.createClient(redisConfig);
    }
}

