import express, { Request, Response } from "express";
import morgan from "morgan";
import { errorHandler } from "../middleware/error-handler";
import { router as projectsRouter } from "../routes/projectsRouter";

export const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());

// routers
app.use("/projects", projectsRouter);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Invalid endpoint" });
});

app.use(errorHandler);
