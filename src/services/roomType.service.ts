import { ObjectId, Types } from "mongoose";
import ICreateRoomType from "../interfaces/roomType.interface";
import RoomType from "../models/roomType.model";

class RoomTypeService {
  async createNewRoomType(data: ICreateRoomType) {
    const roomType = await RoomType.create(data);

    await roomType.save();

    return roomType;
  }

  async list(filter = {}) {
    const roomType = await RoomType.find(filter);
    return roomType;
  }

  async retrieveById(id: Types.ObjectId) {
    return await RoomType.findById(id);
  }


  async updateOneById(id: Types.ObjectId, update: Partial <ICreateRoomType>) {
    const roomtype = await RoomType.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    return roomtype;
  }

  async deleteOneById(_id: Types.ObjectId) {
    const roomtype = await RoomType.findByIdAndRemove(_id);

    return roomtype;
  }
}

export default new RoomTypeService();
