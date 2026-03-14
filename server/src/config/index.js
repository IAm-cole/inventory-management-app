import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
// import router from "routes/user.route.js"
import userRouter from './routes/user.route.js'
 dotenv.config({
  path: "../../.env",
});

const app = express();

// ability for server to pass whatever client req

app.use(express.json())





//route declearation
app.use("/api/v1/users", userRouter);
app.use("/api/v1/users", postRouter);


// route: http://localhost:4000/api/v1/users/register

export const startServer = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line to check the value of MONGODB_URI
    await connectDB();

    app.on("error", (error) => {
      console.error("Server error:", error);
    });

    app.listen(process.env.PORT || 8000);
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
};
startServer();