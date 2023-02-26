import { Request, Response, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import roomTypeService from "../services/roomType.service";

class RoomTypeController {
  async create (req: Request, res: Response) {
   const newRoomType = await roomTypeService.createNewRoomType(req.body)

   return res.status(200).send({
    success: true,
    message: "Room type created successfully",
    data: newRoomType
   })
  }

  async list(req: Request, res: Response){
    const roomTypes = await roomTypeService.list()

    return res.status(200).send({
      success: true,
      message: "Room types listed successfully",
      data: roomTypes
    })
  }

  async retrieve(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);


    const room = await roomTypeService.retrieveById(_id);

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

    
    const updatedRoomType = await roomTypeService.updateOneById(
      _id,
      req.body
    );

    return res.status(200).send({
      success: true,
      message: "RoomType updated successfully",
      data: updatedRoomType,
    });
  }

  async delete(req: Request, res: Response) {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    await roomTypeService.deleteOneById(_id);

    return res.status(200).send({
      success: true,
      message: "Room deleted successfully",
    });
  }
}

export default new RoomTypeController();
