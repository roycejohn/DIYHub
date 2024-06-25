
import dotenv from 'dotenv';
import connectDB from './src/config/dbConnection.js';
import express from 'express';
import cors from 'cors';
import projectRoutes from './src/routes/exProjectRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/projects', projectRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
