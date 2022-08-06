import { Request, Response } from "express";
import { CreateTaskUseCase } from "../usecases/createTask.usecase";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { title, description, date, durationTime } = request.body;

    const createTaskUseCase = new CreateTaskUseCase();

    await createTaskUseCase.execute({ title, description, date, durationTime });

    return response.status(201).send();
  }
}
