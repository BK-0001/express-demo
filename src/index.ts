import express, { Request, Response } from "express";

const PORT = 3000;
const HOST = "localhost";

const app = express();

enum PROJECT_STATUS {
  DRAFT = "draft",
  IN_PROGRESS = "in progress",
  COMPLETE = "complete"
}

type Project = {
  id: string;
  title: string;
  description?: string;
  status: PROJECT_STATUS;
};

const projects: Project[] = [
  {
    id: "375cfa17-60df-44c6-9b78-5252ca361e47",
    title: "my first project",
    status: PROJECT_STATUS.DRAFT
  }
];

app.get("/projects", (req: Request, res: Response) => {
  res.status(200).json(projects);
});

app.get("/projects/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const project = projects.find((project) => project.id === id);

  if (!project) {
    res.status(404).json({ error: `record not found with id ${id}` });
  }

  res.status(200).json(project);
});

app.listen(PORT, HOST, () => {
  console.log(`[server]: listening at http://${HOST}:${PORT}`);
});
