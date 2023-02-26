import express from "express";
import userController from "../controllers/user.controller";
import validate from "../middlewares/validate.middlewares";
import auth from "../middlewares/authenticator.middlewares";
import { CreateUserSchema, LoginUserSchema, UpdateUserSchema } from "../schemas/user.schema";
const userRouter = express.Router();

// userRouter.post("/",  userController.create);
userRouter.post("/", [validate(CreateUserSchema)], userController.create);

userRouter.post("/login",[validate(LoginUserSchema)], userController.login);

// userRouter.post("/logout",auth, userController.logout);

// userRouter.post("/logoutAll", auth,userController.logoutAll);

// getting only the logged in user
userRouter.get("/me", auth, userController.me);

// userRouter.get("/:id", userController.retrieve);

// updating only the logged in user

userRouter.patch("/me", [validate(UpdateUserSchema)], auth,  userController.update);


// only the logged in user can delete the profile
userRouter.delete("/me", auth, userController.delete);

export default userRouter;
