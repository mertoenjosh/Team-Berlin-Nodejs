import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Server is up and running' });
});

app.get('/dummy', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to SpaceYaTech!!!' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
