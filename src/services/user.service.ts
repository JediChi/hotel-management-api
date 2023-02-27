import ICreateUser from "../interfaces/user.interface"
import {Model} from "mongoose"
import { User } from "../models/user.model";



const userModel: Model<ICreateUser> = User;
class UserService {
  async createNewUser(data: Partial <ICreateUser>) {
    // const user = await User.create(data);
    const user = new userModel(data);
    const token = await user.generateAuthToken()
    await user.save();
    return ({user,token});
  }

  async loginUser(email: string, password: string) {
    const user = await User.findByCredentials(email, password)
    const token = await user.generateAuthToken()
    return ({user,token});
  }

  


  async updateOne(_user: any, update: Partial<ICreateUser>) {
    const user = await User.find(_user, update, {
      new: true,
      runValidators: true,
    });

    return user;
  }
  

  async delete(_user: any) {
    await User.findOneAndRemove(_user);
  
  }
}

export default new UserService();