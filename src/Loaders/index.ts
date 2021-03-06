import {Request, Response} from "express";
import * as express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "./logger";
import api from "../Apis/api";
import config from "../Configs/index";
import os from "os";
import cluster from "cluster";

export type envType = "devlopment" | "production";

class index{
    private readonly app : express.Application;
    private readonly port: number;
    private readonly cpuNum: number;
    private readonly env: envType;

    constructor(app : express.Application, port : number, env : envType){
        this.app = app;
        this.cpuNum = os.cpus().length;
        this.port= port;
        this.endpoint();
        this.env = env;

        this.setting();
        this.app.use("/api",api());
        this.errorHandling();
    }

    //endpoint
    private endpoint(){
        console.log("endpoint");

        this.app.get("/status",(req, res)=>{
            res.status(200).end();
        });

        this.app.head("/status",(req, res)=>{
            res.status(200).end();
        })
    }

    //middleware
    private setting(){
        console.log("setting");

        this.app.enable("trust proxy");
        // helmet 공부하자
        this.app.use(cors());
        this.app.use(require("method-override")());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    //errorhandling
    private errorHandling(){
        //그외 다른 url에 들어갔을때 400 || 500 이뜨게 되는데 이때 
        console.log("error handling");
        
        this.app.use(((req : Request, res : Response, next : express.NextFunction) =>{
            const err = new Error("Not Found");
            err['status'] = 400;
            next(err);
        }));

        //error handling
        this.app.use((err , req, res, next)=>{
            if(err.name === "UnauthorizedError"){
                return res  
                    .status(err.status)
                    .send({ message : err.message})
                    .end();
            }
            return next(err);
        });

        this.app.use((err ,req , res ,next)=>{
            //이 화면이 나오게 된다.
            res.status(err.status || 500);
            res.json({
                errors:{
                    message :`안녕자기 : ${err}`
                }
            });
        });
    };

    public async start(){
        try {
            if(this.env === "production" && cluster.isMaster){
                for (let i = 0; i < this.cpuNum; i++) {
                    cluster.fork();
                }
            } else {
                this.app.listen(this.port, () => {
                    logger.info(`${process.pid} is connected http://localhost:${this.port}`);
                }).on('error', err => {
                    logger.error(err);
                    process.exit(1);
                });

                console.log("dev mode");

                cluster.on('exit', (worker, code, signal) => {
                    logger.info(`${process.pid} is disconnected`);
                    cluster.fork();
                });
            }
        }catch(e){
            logger.error("app start error");
        }
    }
};

export default index;

