import { GetTasksController } from "../../../controllers";

const makeGetTasksController = (): GetTasksController =>
  new GetTasksController();

export { makeGetTasksController };
