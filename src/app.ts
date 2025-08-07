import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🚀 Welcome to Edustore Backend API');
});

export default app;
