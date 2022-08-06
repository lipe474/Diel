import { GetTasksByTitleController } from "../../../controllers";

const makeGetTasksByTitleController = (): GetTasksByTitleController =>
  new GetTasksByTitleController();

export { makeGetTasksByTitleController };
