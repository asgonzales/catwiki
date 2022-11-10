import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import catRoutes from './routes/cats';

const app:Application = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    origin: config.cors,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-type', 'Accept'],
}))

interface Error {
    status:number;
    message:string;
}

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    const status = err.status || 500;
    const message = err.message || err;

    console.log(err);

    res.status(status).send(message)
})

app.use(catRoutes);






export default app;