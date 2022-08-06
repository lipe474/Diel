import { Request, Response } from "express";
import { GetTasksUseCase } from "../usecases/getTasks.usecase";

export class GetTasksController {
  async handle(request: Request, response: Response) {
    const getTasksUseCase = new GetTasksUseCase();

    const tasks = await getTasksUseCase.execute();

    return response.json(tasks);
  }
}
