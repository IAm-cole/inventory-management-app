import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
      {
        serverSelectionTimeoutMS: 5000,
      },
    );
    console.log(`MongoDB connected !!! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;