export enum PROJECT_STATUS {
  DRAFT = "draft",
  IN_PROGRESS = "in progress",
  COMPLETE = "complete"
}

export type Project = {
  id: string;
  title: string;
  description?: string;
  status: PROJECT_STATUS;
};

export const projects: Project[] = [
  {
    id: "375cfa17-60df-44c6-9b78-5252ca361e47",
    title: "my first project",
    status: PROJECT_STATUS.DRAFT
  }
];
