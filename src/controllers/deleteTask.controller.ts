import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../usecases/deleteTask.usecase";

export class DeleteTaskController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteTaskUseCase = new DeleteTaskUseCase();

    await deleteTaskUseCase.execute(parseInt(id));

    return response.status(204).send();
  }
}
