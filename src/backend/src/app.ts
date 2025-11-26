import express from 'express';
import type { Request, Response } from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DATABASE_URL;

if (!MONGO_URI) {
    console.error('FATAL ERROR: DATABASE_URL is not defined in environment variables.');
    process.exit(1); 
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connection established successfully!');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); 
    }
};

app.use(express.json());

app.get('/health-check', (_req: Request, res: Response) => {
  res.status(200).json({
    message: 'Backend Service is running!',
    port: PORT,
  });
});

const startServer = async () => {
    await connectDB(); 
    
    app.listen(PORT, () => {
        console.log(`Server started and listening on port ${PORT}`);
    });
};

startServer();
