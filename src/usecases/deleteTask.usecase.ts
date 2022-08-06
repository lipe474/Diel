import { prisma } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export class DeleteTaskUseCase {
  async execute(id: number) {
    const task = await prisma.tasks.findFirst({ where: { id } });

    if (!task) {
      throw new AppError("Task does not exists!");
    }

    await prisma.tasks.delete({ where: { id } });

    return task;
  }
}
