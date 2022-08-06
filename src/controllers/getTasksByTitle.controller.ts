import { Request, Response } from "express";
import { GetTasksByTitleUseCase } from "../usecases/getTasksByTitle.usecase";

export class GetTasksByTitleController {
  async handle(request: Request, response: Response) {
    const { title } = request.body;

    const getTasksByTitleUseCase = new GetTasksByTitleUseCase();

    const tasks = getTasksByTitleUseCase.execute(title);

    return response.json(tasks);
  }
}
