import express from "express";
import roomController from "../controllers/room.controller";
require("./users.router");
import validator from "../middlewares/validate.middlewares";
import auth from "../middlewares/authenticator.middlewares";

import { CreateRoomSchema, UpdateRoomSchema, RoomQueryParamsSchema } from "../schemas/room.schema";
const roomRouter = express.Router();

roomRouter.post(
  "/",
  [validator(CreateRoomSchema)],
  [auth],
  roomController.create
);

roomRouter.get(
  "/",
  [validator(RoomQueryParamsSchema, "query")],
  [auth],
  roomController.list
);

roomRouter.get("/:id", [auth], roomController.retrieve);

roomRouter.patch(
  "/:id",
  [validator(UpdateRoomSchema)],
  [auth],
  roomController.update
);

roomRouter.delete("/:id", [auth], roomController.delete);

export default roomRouter;
