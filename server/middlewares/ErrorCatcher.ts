import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/error";

export const ErrorCatcher = (
  error: CustomError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
    if (error) {
        res.status(error.status ?? 500).send({
            error: error.message ?? "Something went wrong."
        })
    }

  return next();
};
