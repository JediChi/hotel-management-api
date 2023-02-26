import express from "express";
import roomTypeController from "../controllers/roomType.controller";
import validator from "../middlewares/validate.middlewares";
import auth from "../middlewares/authenticator.middlewares";
import authorize from "../middlewares/authorization.middlewares";
import { CreateRoomTypeSchema, UpdateRoomTypeSchema } from "../schemas/roomtype.schema";
const roomTypeRouter = express.Router();

roomTypeRouter.post("/", [
  validator(CreateRoomTypeSchema)
],[auth, authorize], roomTypeController.create);

roomTypeRouter.get("/",[auth], roomTypeController.list);

roomTypeRouter.get("/:id",[auth], roomTypeController.retrieve);

roomTypeRouter.patch("/:id",  [validator(UpdateRoomTypeSchema)],[auth, authorize], roomTypeController.update);

roomTypeRouter.delete("/:id", [auth, authorize],roomTypeController.delete);

export default roomTypeRouter;