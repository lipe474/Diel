import { CreateTaskController } from "../../../controllers";

const makeCreateTaskController = (): CreateTaskController =>
  new CreateTaskController();

export { makeCreateTaskController };
