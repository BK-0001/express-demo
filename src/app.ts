import express from "express";
import morgan from "morgan";
import { router as projectsRouter } from "../routes/projectsRouter";

export const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routers
app.use("/projects", projectsRouter);
