import express, { Request, Response } from "express";
import validateURL from 'valid-url';
import { findByOriginal, insertOriginal } from "../services";
import { CustomError } from "../utils/error";

const shorten = express.Router();

shorten.post('/api/shortener', async (req: Request, res: Response) => {
    const { url } = req.body;
    
    if (!url)
        throw new CustomError("BAD_REQUEST", 400, "[url] is required");

    if (!validateURL.isWebUri(url))
        throw new CustomError("BAD_REQUEST", 400, "[url] not valid")

    const dbUrl = await findByOriginal(url);

    if (dbUrl) return res.send({
        shortened: dbUrl.shortened,
    });

    const doc = await insertOriginal(url);
    
    res.send({
        shortened: doc.shortened,
    });
});

export default shorten;
