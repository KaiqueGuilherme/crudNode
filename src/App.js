import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


export default app;
