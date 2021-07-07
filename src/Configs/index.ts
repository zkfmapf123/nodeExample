import dotenv from "dotenv";

dotenv.config();

export default {
    port : process.env.PORT,
    
    //mysql
    db_host : process.env.MYSQL_HOST,
    db_user : process.env.MYSQL_USER,
    db_password : process.env.MYSQL_PW,
    db_port: process.env.MYSQL_PORT,
    
    //redis
    redis_port: process.env.REDIS_PORT,
    redis_host: process.env.REDIS_HOST,

    //그 외 나머지
    env : process.env.ENV,
}