import { prisma } from "../database/prismaClient";

export class GetTasksByTitleUseCase {
  async execute(title: string) {
    const tasks = await prisma.tasks.findMany({ where: { title } });

    return tasks;
  }
}
