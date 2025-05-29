import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/Error/ApiError";
import { courseRepository } from "../repository/courseRepository";
import { deleteImageCloudinary } from "../utils/file upload/cloudinary";


export const courseCreateService = async(data:ICourse)=>{
    try {
        const {title, subtitle, description, category, price, thumbnail} = data;
        if(!title || !subtitle || !description || !category || !price || !thumbnail){
            throw new ApiError({message:"all fields are required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = await courseRepository.createCourse(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const courseUpdateService = async(data:ICourse,id:number)=>{
    try {
        const {title, subtitle, description, category, price, thumbnail} = data;
        if(!title && !subtitle && !description && !category && !price && !thumbnail){
            throw new ApiError({message:"at least one field is required", statusCode:StatusCodes.FORBIDDEN})
        };
        const course = await courseRepository.getCourse(id);
        if(!course){
            throw new ApiError({message:"course not found or invalid id", statusCode:StatusCodes.FORBIDDEN})
        }
        if(thumbnail && course.public_id){
            await deleteImageCloudinary(course.public_id)
        }
        const response = await courseRepository.updateCourse(data,id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const courseGetService = async(id:number)=>{
    try {
        if(!id){
            throw new ApiError({message:"courseId is required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = await courseRepository.getCourse(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const courseDeleteService = async(id:number)=>{
    try {
        if(!id){
            throw new ApiError({message:"courseId is required", statusCode:StatusCodes.FORBIDDEN})
        };
        const course = await courseRepository.getCourse(id);
        if(course?.public_id){
            await deleteImageCloudinary(course.public_id)
        }
        const response = await courseRepository.deleteCourse(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}