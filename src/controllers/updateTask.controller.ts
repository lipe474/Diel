import { Request, Response } from "express";
import { UpdateTaskUseCase } from "../usecases/updateTask.usecase";

export class UpdateTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { ...data } = request.body;

    const updateTaskUseCase = new UpdateTaskUseCase();

    await updateTaskUseCase.execute(parseInt(id), data);

    return response.status(204).send();
  }
}
