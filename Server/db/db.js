import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI)
    console.log((`MongoDB Connected: ${con.connection.host}`.red.underline.bold));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;