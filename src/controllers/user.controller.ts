import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";
import _ from "lodash";

class UserController {
  async create(req: Request, res: Response) {
    const newUser = await UserService.createNewUser(req.body);
    return res.status(201).send({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  }

  async login(req: Request, res: Response) {
    const loginUser = await UserService.loginUser(
      req.body.email,
      req.body.password
    );
    // const shownData = (_.pick(loginUser, ["name","email"]))
    if (!loginUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    return res.header("x-auth-header-token",loginUser.token).status(200).send({
      success: true,
      message: "User logged in successfully",
      data: loginUser,
    });
  }

  // async logout(req, res) {
  //   const logoutUser = await UserService.logOutUser(req.user)
  //   if (logoutUser) {
  //     return res.status(200).send({
  //       success: true,
  //       message: "User logged out successfully",

  //     })
  //   }

  //   return res.status(404).send({
  //     success: false,
  //     message: "Logout was not successful",

  //   })
  // }
  // async logoutAll(req, res) {
  //   const logoutAllUser = await UserService.logOutUser()
  //   if (logoutAllUser) {
  //    req.user.token = []
  //     await req.user.save();
  //     return res.status(200).send({
  //       success: true,
  //       message: " All User logged out successfully",

  //     })
  //   }

  //   return res.status(404).send({
  //     success: false,
  //     message: "Logout was not successful",

  //   })
  // }

  async me(req: Request, res: Response) {

    return res.status(200).send({
      success: true,
      message: "User listed successfully",
      data: req.user
    });
  }

  async update(req: Request, res: Response) {
    const updatedUser = await UserService.updateOne(req.user, req.body);

    const { body } = req;

    return res.status(200).send({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  }

  async delete(req: Request, res: Response) {
    await UserService.delete(req.params.user);

    return res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  }
}

export default new UserController();
