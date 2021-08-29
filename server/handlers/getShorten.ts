import express, { Request, Response } from "express";
import { fetchStoreRecords } from "../services";

const getShorten = express.Router();

getShorten.get('/api/shortener', async (
    req: Request,
    res: Response
) => {
    const skip = Number(req.query.skip);
    const limit = Number(req.query.limit);

    const items = await fetchStoreRecords(skip, limit);

    return res.send({ items });
});

export default getShorten;
