import { Request, Response, Router } from "express";
import { projects } from "../models/Project";

export const router = Router();

// route
// /projects
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(projects);
});

// /projects/:id
router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    res.status(404).json({ error: `record not found with id ${id}` });
  }

  res.status(200).json(project);
});

// /projects
router.post("/", (req: Request, res: Response) => {
  const body = req.body;

  const newProject = {
    id: crypto.randomUUID(),
    ...body
  };

  projects.push(newProject);

  res.status(201).json(newProject);
});
