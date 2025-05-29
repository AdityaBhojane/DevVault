import { StatusCodes } from "http-status-codes";
import { userRepository } from "../repository/userRepository"
import { ApiError } from "../utils/Error/ApiError";
import { deleteImageCloudinary } from "../utils/file upload/cloudinary";



export const getUserService = async(id:number)=>{
    try {
        const response = await userRepository.getUserById(id);
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const updateUserService = async(id:number, data:IUserCreate)=>{
    try {
        if(!id || !data) throw new ApiError({message:"id and data is required", statusCode:StatusCodes.FORBIDDEN})
        const response = await userRepository.updateUser(id,data);
        return response
    } catch (error) {
        console.log("update user service error",error);
        throw error
    }
};

export const deleteUserService = async(id:number)=>{
    try {
        const isUser = await userRepository.getUserById(id);
        if(isUser?.public_id){
            await deleteImageCloudinary(isUser.public_id)
        }
        const response = await userRepository.deleteUserById(id);
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
};
