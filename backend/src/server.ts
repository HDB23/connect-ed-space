import express from 'express';
import cors from 'cors';
import { router as apiRouter } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', apiRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Connect Ed Space Backend is running!' });
});

// API test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working correctly!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});