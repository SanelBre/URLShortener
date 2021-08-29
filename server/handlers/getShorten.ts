import express, { Request, Response } from "express";

const getShorten = express.Router();

getShorten.get('/api/shortener', (_req: Request, res: Response) => {
    res.send('asd');
});

export default getShorten;
