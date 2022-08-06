import { prisma } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

interface IRequest {
  title: string;
  description: string;
  date: Date;
  durationTime: number;
}

export class UpdateTaskUseCase {
  async execute(
    id: number,
    { title, description, date, durationTime }: IRequest
  ) {
    const task = await prisma.tasks.findFirst({ where: { id } });

    if (!task) {
      throw new AppError("Task does not exists!");
    }

    await prisma.tasks.update({
      where: { id },
      data: { title, description, date, durationTime },
    });

    return task;
  }
}
