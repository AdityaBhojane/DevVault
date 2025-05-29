import { StatusCodes } from "http-status-codes";
import { ApiError } from "../utils/Error/ApiError";
import { courseRepository } from "../repository/courseRepository";
import { lectureRepository } from "../repository/lectruesRepository";
import { deleteVideoCloudinary } from "../utils/file upload/cloudinary";


export const lectureCreateService = async (data: ILecture) => {
    try {
        const { title, description, videoURL, courseId, public_id } = data;
        if (!title || !videoURL || !description || !courseId) {
            throw new ApiError({ message: "all fields are required", statusCode: StatusCodes.FORBIDDEN })
        };
        const response = await lectureRepository.createLecture({
            title,
            description,
            videoURL,
            courseId,
            public_id
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};
export const lectureUpdateService = async (data: ILectureUpdate, id: number) => {
    try {
        const { title, description, videoURL } = data;
        if (!title && !videoURL && !description ) {
            throw new ApiError({ message: "all fields are required", statusCode: StatusCodes.FORBIDDEN })
        };
        const response = await lectureRepository.updateLecture(data, id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};
export const lectureDeleteService = async (id: number) => {
    try {
        if (!id) {
            throw new ApiError({ message: "lecture id is required", statusCode: StatusCodes.FORBIDDEN })
        };
        const lecture = await lectureRepository.getLecture(id);
        if(!lecture){
            throw new ApiError({ message: "lecture not found or invalid id", statusCode: StatusCodes.FORBIDDEN })
        }
        if(lecture && lecture.public_id){
            await deleteVideoCloudinary(lecture.public_id);
        }
        const response = lectureRepository.deleteLecture(id);
        return response;
    } catch (error) {
        console.log(error);
        throw error
    }
};


