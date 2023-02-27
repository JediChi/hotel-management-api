import express, { Application, application } from 'express';
import morgan from "morgan";
import cors from "cors";
import pino from 'pino';
import pinoHttp from 'pino-http';
import asyncError from './errors.middlewares';
import indexRoutes from '../routers/index.routes';
import db from '../db/mongoose.db';
// import app from '../app';


export const logger = pino({
  level: 'info',
  // prettyPrint: process.env.NODE_ENV !== 'production'
});


db();

export default (app: Application) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  indexRoutes(app);

  app.use(asyncError);
};

