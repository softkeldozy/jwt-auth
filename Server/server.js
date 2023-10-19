import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './db/db.js';

dotenv.config();
const port = process.env.PORT || 4000;
connectDB();
const app = express();

app.use('/api/users', userRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => res.send('Server is running '));
app.listen(port, () => console.log(`Server started on port ${port}!`))