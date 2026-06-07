import express from "express"
import cors from "cors";


const app = express()




app.use(cors({

  origin: 'http://localhost:3000', 
  

  credentials: true, 
  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


import userRouter from "../../routes/user.route.js"
import postRouter from "../../routes/post.route.js"



app.use("/api/v1/users", userRouter  );
app.use("/api/v1/posts", postRouter);
// 2

//example route: http://localhost:4000/api/v1/users/register


export default app;