import express from "express";
import { PORT } from "./config/env.js"
import connectDB from "./config/db.js";
import { authRouter } from "./routers/authRouter.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { contentRouter } from "./routers/contentRouter.js";
connectDB();
const app = express();
app.use(express.json());
app.use("/api/v1", authRouter)
app.use("/api/v1/content",authMiddleware,contentRouter)

app.listen(PORT);