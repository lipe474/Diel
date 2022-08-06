import { prisma } from "../database/prismaClient";

interface IRequest {
  title: string;
  description: string;
  date: Date;
  durationTime: string;
}

export class CreateTaskUseCase {
  async execute({ title, description, date, durationTime }: IRequest) {
    await prisma.tasks.create({
      data: {
        title,
        description,
        date,
        durationTime,
      },
    });
  }
}
