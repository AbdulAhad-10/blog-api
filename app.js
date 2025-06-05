import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import blogRouter from "./routes/blog.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users", userRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

app.listen(PORT, async () => {
  console.log(`Blog API is running on port http://localhost:${PORT}`);

  await connectToDatabase();
});
