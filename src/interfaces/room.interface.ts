import { ObjectId } from "mongoose";

interface ICreateRoom {
    
    name: string,
    roomType: ObjectId,
    price: number
}

export default ICreateRoom;