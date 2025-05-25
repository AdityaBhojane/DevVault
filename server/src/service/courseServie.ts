import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/Error/ApiError";
import { courseRepository } from "../repository/courseRepository";


export const courseCreateService = async(data:ICourse)=>{
    try {
        const {title, subtitle, description, category, price, thumbnail} = data;
        if(!title && !subtitle && !description && !category && !price && !thumbnail){
            throw new ApiError({message:"all fields are required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = courseRepository.createCourse(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const courseUpdateService = async(data:ICourse,id:number)=>{
    try {
        const {title, subtitle, description, category, price, thumbnail} = data;
        if(!title || !subtitle || !description || !category || !price || !thumbnail){
            throw new ApiError({message:"at least one field is required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = courseRepository.updateCourse(data,id);
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
        const response = courseRepository.getCourse(id);
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
        const response = courseRepository.deleteCourse(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}