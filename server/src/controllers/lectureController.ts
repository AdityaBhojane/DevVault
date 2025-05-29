import { Request, Response } from "express";
import { lectureCreateService, lectureDeleteService, lectureUpdateService } from "../service/lectureService";
import { StatusCodes } from "http-status-codes";
import customErrorResponse from "../utils/customError";
import { customSuccussResponse } from "../utils/customSuccess";
import { deleteVideoCloudinary } from "../utils/file upload/cloudinary";
import { lectureRepository } from "../repository/lectruesRepository";


export const createLectureController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const courseId = Number(req.query.id);
        if (!req.file) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'error uploading lecture video'});
            return;
        };
        if (isNaN(courseId)) {
            // res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            // return;
            throw new Error('course id is required')
        };
        data.videoURL = req.file.path;
        data.public_id = req.file.filename;
        data.courseId = courseId;
        const response = await lectureCreateService(data);
        res.status(StatusCodes.OK).json(customSuccussResponse("lecture created Successfully", response))
    } catch (error) {
        console.log("delete course controller error", error);
        if (req.file) {
            console.log(req.file)
            await deleteVideoCloudinary(req.file.filename)
        }
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
};

export const updateLectureController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = Number(req.query.id);
        if (isNaN(id)) {
            throw new Error('course id is required')
        };
        const lecture = await lectureRepository.getLecture(id);
        if (req.file && lecture?.public_id) {
            data.videoURL = req.file.path;
            data.public_id = req.file.filename;
            await deleteVideoCloudinary(lecture.public_id);
        };
        const response = await lectureUpdateService(data, id);
        res.status(StatusCodes.OK).json(customSuccussResponse("lecture updated Successfully", response))
    } catch (error) {
        console.log("delete course controller error", error);
        if (req.file) {
            console.log(req.file)
            await deleteVideoCloudinary(req.file.filename)
        }
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
};

export const deleteLectureController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.query.id);
        const response = await lectureDeleteService(id);
        res.status(StatusCodes.OK).json(customSuccussResponse("lecture deleted Successfully", response))
    } catch (error) {
        console.log("delete course controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}