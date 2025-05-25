import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/Error/ApiError";
import { courseRepository } from "../repository/courseRepository";
import { lectureRepository } from "../repository/lectruesRepository";


export const lectureCreateService = async(data:ILecture)=>{
    try {
        const {title, description, videoURL, duration, courseId} = data;
        if(!title && !videoURL && !description && !duration && !courseId){
            throw new ApiError({message:"all fields are required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = lectureRepository.createLecture({
            title, 
            description, 
            videoURL, 
            duration, 
            courseId
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};
export const lectureUpdateService = async(data:ILecture,id:number)=>{
    try {
        const {title, description, videoURL, duration, courseId} = data;
        if(!title || !videoURL || !description || !duration || !courseId){
            throw new ApiError({message:"all fields are required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = lectureRepository.updateLecture({
            title, 
            description, 
            videoURL, 
            duration, 
            courseId
        },id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const lectureDeleteService = async(id:number)=>{
    try {
        if(!id){
            throw new ApiError({message:"lecture id is required", statusCode:StatusCodes.FORBIDDEN})
        };
        const response = lectureRepository.deleteLecture(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};


