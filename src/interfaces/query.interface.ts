import { ObjectId } from "mongoose";

export interface ICreateQuery {
    search?: string ,
    roomType?: ObjectId,
    minPrice?: number,
    maxPrice?: number
}