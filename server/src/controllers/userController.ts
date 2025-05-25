import { Request, Response } from "express";
import { deleteUserService, getUserService, updateUserService } from "../service/userService"
import customErrorResponse from "../utils/customError";
import { customSuccussResponse } from "../utils/customSuccess";
import { StatusCodes } from "http-status-codes";
import { deleteImageCloudinary } from "../utils/file upload/cloudinary";
import { userRepository } from "../repository/userRepository";


export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, error: 'invalid user id' });
        }
        const response = await getUserService(id);
        res.status(200).json({
            message: response
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))

    }
}

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            res.status(StatusCodes.BAD_REQUEST).json({ success: false, error: 'invalid user id' });
            return;
        };
        const { username } = req.body;
        const updateData: Partial<IUserCreate> = { username: username }
        if (req.file) {
            updateData.avatar = req.file.path;
            updateData.public_id = req.file.filename;
            // delete find user and delete old image;
            const user = await userRepository.getUserById(id);
            if (user && user.public_id) {
                await deleteImageCloudinary(user.public_id)
            }
        };
        const response = await updateUserService(id, updateData);
        res.status(StatusCodes.OK).json(customSuccussResponse("Profile Updated Successfully", response))
    } catch (error) {
        console.log("update user controller error", error);
        if (req.file) {
            console.log(req.file)
            await deleteImageCloudinary(req.file.filename)
        }
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}


export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid user ID' });
            return;
        }
        const response = await deleteUserService(id);
        res.status(200).json({
            message: response
        })
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))

    }
}

