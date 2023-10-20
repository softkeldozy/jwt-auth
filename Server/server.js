import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './db/db.js';

dotenv.config();
const port = process.env.PORT || 4000;

connectDB();
const app = express();

// middleware
app.use(express.json());
//* for sending of form data
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

app.use('/api/users', userRoutes);

// Error Handlers
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => res.send('Server is running '));
app.listen(port, () => console.log(`Server started on port ${port}!`))