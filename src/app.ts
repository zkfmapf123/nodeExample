import "reflect-metadata";
import config from "./Configs/index";
import express from "express";
import logger from "./Loaders/logger";
import index, { envType } from "./Loaders";

async function startServer() {
    const app : index = new index(express(),+config.port,config.env as envType);
    await app.start();
};

startServer();