import { Express } from "express";
import {
  makeCreateTaskController,
  makeDeleteTaskController,
  makeGetTasksByTitleController,
  makeGetTasksController,
  makeUpdateTaskController,
} from "../factories/controllers";

export const setupRoutes = (app: Express) => {
  app.post("/tasks", makeCreateTaskController().handle);
  app.delete("/tasks/:id", makeDeleteTaskController().handle);
  app.put("/tasks/:id", makeUpdateTaskController().handle);
  app.get("/tasks", makeGetTasksController().handle);
  app.patch("/tasks/:id", makeGetTasksByTitleController().handle);
};
