import { prisma } from '../database/prismaClient'

export class GetTasksUseCase {
  async execute() {
    const tasks = await prisma.tasks.findMany()

    return tasks
  }
}
