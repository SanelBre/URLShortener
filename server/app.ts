import "express-async-errors";
import express, { Request, Response } from 'express';
import { json } from "body-parser";
import { PORT } from './utils/env';
import { requestShorten, getShorten, proxyShorten } from './handlers';
import { ErrorCatcher } from "./middlewares";
import { CustomError } from "./utils/error";

const app = express();

app.use(json());

app.use(requestShorten);
app.use(getShorten);
app.use(proxyShorten);

app.all("*", async () => {
  throw new CustomError("NOT_FOUND", 404, "the route is not found");
});

app.use(ErrorCatcher);

app.listen(PORT, () => {
  return console.log(`istening on ${PORT}`);
});
