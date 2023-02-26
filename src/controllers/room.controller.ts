import { Request, Response } from "express";
import roomTypeService from "../services/roomType.service";
import roomService from "../services/room.service";
import { ICreateQuery } from "../interfaces/query.interface";
import _ from "lodash";
import mongoose, { ObjectId, Types } from "mongoose";

class RoomController {
  async create(req: Request, res: Response) {
    const roomType = await roomTypeService.retrieveById(req.body.roomType);

    if (!roomType) {
      return res.status(404).send({
        success: false,
        message: "The provided Room type was not found",
      });
    }

    const newRoom = await roomService.createNewRoom(req.body);
    return res.status(201).send({
      success: true,
      message: "Room created successfully",
      data: newRoom,
    });
  }

  async list(req: Request, res: Response) {
    // const { search, roomType, minPrice, maxPrice } = req.query;
    const query: ICreateQuery = req.query
    const rooms = await roomService.list(query);

    if (_.isEmpty(rooms)) {
      return res.status(404).send({
        success: false,
        message: "Room not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Room listed successfully",
      data: rooms,
    });
  }

  async retrieve(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    const room = await roomService.retrieveById(_id);

    if (!room) {
      return res.status(404).send({
        success: false,
        message: "Room not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Room retrieved successfully",
      data: room,
    });
  }

  async update(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    const updatedRoom = await roomService.updateOneById(_id, req.body);

    // const {body } = req

    return res.status(200).send({
      success: true,
      message: "Room updated successfully",
      data: updatedRoom,
    });
  }

  async delete(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);
    await roomService.deleteOneById(_id);

    return res.status(200).send({
      success: true,
      message: "Room deleted successfully",
    });
  }
}

export default new RoomController();
