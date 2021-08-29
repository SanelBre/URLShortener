import express, { Request, Response } from "express";

const proxyRequest = express.Router();

proxyRequest.post('/:proxyParam', (_req: Request, res: Response) => {
    res.send('asd');
});

export default proxyRequest;
