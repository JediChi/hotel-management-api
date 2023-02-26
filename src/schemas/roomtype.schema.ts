import Joi from "joi";

export const CreateRoomTypeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().trim().lowercase(),
});

export const UpdateRoomTypeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().trim().lowercase(),
});