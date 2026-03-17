import express from "express"


const app = express()

app.use(express.json())

import userRouter from "../../routes/user.route.js"
import postRouter from "../../routes/post.route.js"



app.use("/api/v1/users", userRouter);
app.use("/app/v1/post", postRouter)
// 2

//example route: http://localhost:4000/api/v1/users/register


export default app;