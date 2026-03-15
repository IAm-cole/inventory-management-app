
import dotenv from "dotenv";
import connectDB from "./database.js";
import app from "./app.js";
// import router from "routes/user.route.js"




 dotenv.config({
  path: "../.env",
});





export const startServer = async () => {
  try {
    console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging line to check the value of MONGODB_URI
    await connectDB();

    app.on("error", (error) => {
      console.error("Server error:", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};
startServer();