import * as mysql2 from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

const dbConfig = {
    host : "",
    user : "",
    password : "",
    database : "",
    port : 3306,
    connectionLimit : 10,
    waitForConnections : true
};

const pool = mysql2.createPool(dbConfig);
export default pool;

