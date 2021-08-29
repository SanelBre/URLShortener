import express, { Request, Response } from "express";
import { fetchStoreRecords, findByShortened } from "../services";
import { CustomError } from "../utils/error";

const visitShorten = express.Router();

visitShorten.get('/:shortened', async (
    req: Request,
    res: Response
) => {
    const { shortened } = req.params;
    const item = await findByShortened(shortened);

    if (!item)
        throw new CustomError(
            "NOT_FOUND",
            404,
            "the route is not found"
        );

    
    item.visits = item.visits + 1;
    item.save();

    return res.status(302).redirect(item.original);
});

export default visitShorten;
