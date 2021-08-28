import express, { Request, Response } from 'express';
import { PORT } from './utils/env';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('hello world');
});

app.post('/api/shorten', (_req: Request, res: Response) => {
  res.send('asd');
});

app.listen(PORT, () => {
  return console.log(`istening on ${PORT}`);
});
