import { DeleteTaskController } from "../../../controllers";

const makeDeleteTaskController = (): DeleteTaskController =>
  new DeleteTaskController();

export { makeDeleteTaskController };
