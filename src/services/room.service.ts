import Room from "../models/room.model";
import RoomTypeService from "./roomType.service";
import _ from "lodash";
import ICreateRoom from "../interfaces/room.interface";
import { ObjectId, Types } from "mongoose";
import { ICreateQuery } from "../interfaces/query.interface";

class RoomService {
    async createNewRoom(data: ICreateRoom) {
      const room = new Room(data);
  
      await room.save();
  
      return room;
    }
  
    async list(query: ICreateQuery) {
      // begin: handle price case
      const priceQuery: { price?: { $gte?: number, $lte?: number } } = {};
      // if (query?.minPrice) {
      //   priceQuery.price = { $gte: query?.minPrice };
      // }
  
      if (query?.maxPrice && query?.minPrice) {
        priceQuery["price"] = {
          $gte: query?.minPrice,
          $lte: query?.maxPrice,
        };
      }
  
      let roomTypesIds: Types.ObjectId[] = [];
      // end handle price case
      // begin handle room type case
      
  
      if (query?.roomType) {
        // make a search query for room type
        const searchRoomTypeQuery = {
          name: {
            $regex: query?.roomType,
            $options: "i",
          },
        };
  
        const searchedRoomTypes = await RoomTypeService.list(searchRoomTypeQuery);
  
        // if something was found
        if (!_.isEmpty(searchedRoomTypes)) {
          // pick out all the room type identifiers (ids) that was found
          roomTypesIds= searchedRoomTypes.map((rooType) => {
            return rooType._id;
          });
        }
      }
  
      // const searchQueryObject = {
        //   $or: [],
        // };
        const searchQueryObject: { [key: string]: any } = {};
        // { $or: any[] } = { $or: [] }
          // we are using the or operator to search all the fields
      if (query?.search) {
        searchQueryObject["$or"].push({
          name: {
            $regex: query?.search,
            $options: "i",
          },
        });
      }
  
      // add price query if it not empty
      if (!_.isEmpty(priceQuery)) {
        searchQueryObject["$or"].push(priceQuery);
      }
  
      // if roomTypesIds is not empty, it means we found something
      if (!_.isEmpty(roomTypesIds)) {
        searchQueryObject["$or"].push({
          roomType: { $in: roomTypesIds },
        });
      }
  
      const rooms = await Room.find(searchQueryObject).populate({
        path: "roomType",
        model: "RoomType",
        select: "_id name",
      });
  
      return rooms;
    }
  
    async retrieveById(id: Types.ObjectId) {
      const room = await Room.findById(id);
      return room;
    }
  
    async updateOneById(id: Types.ObjectId, update: Partial<ICreateRoom>) {
      const room = await Room.findByIdAndUpdate(id, update, {
        new: true,
        runValidators: true,
      });
  
      return room;
    }
  
    async deleteOneById(_id: Types.ObjectId) {
      const room = await Room.findByIdAndRemove(_id);
  
      return room;
    }
  }
  
  export default new RoomService();