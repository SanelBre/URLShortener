import "express-async-errors";
import express from 'express';
import { json } from "body-parser";
import { PORT } from './utils/env';
import {
  requestShorten,
  getShorten,
  proxyShorten,
  visitShorten
} from './handlers';
import { ErrorCatcher } from "./middlewares";
import { CustomError } from "./utils/error";
import { startDb } from "./utils/db";

const app = express();

app.use(json());

app.use(requestShorten);
app.use(getShorten);
app.use(proxyShorten);
app.use(visitShorten);

app.all("*", async () => {
  throw new CustomError(
    "NOT_FOUND",
    404,
    "the route is not found"
  );
});

app.use(ErrorCatcher);

startDb().then(() => {
  app.listen(PORT, () => {
    return console.log(`listening on ${PORT}`);
  });
})
