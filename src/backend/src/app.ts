import express from 'express';
import type { Request, Response } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health-check', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Backend Service is running!',
    port: PORT,
  });
});

app.listen(PORT, () => {
  console.log(`API Server is running at http://localhost:${PORT}`);
});
