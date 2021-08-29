import express, { Request, Response } from "express";

const shorten = express.Router();

shorten.post('/api/shortener', (_req: Request, res: Response) => {
    res.send('asd');
});

export default shorten;
