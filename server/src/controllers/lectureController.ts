import { Request, Response } from "express";
import { lectureCreateService, lectureDeleteService, lectureUpdateService } from "../service/lectureService";
import { StatusCodes } from "http-status-codes";
import customErrorResponse from "../utils/customError";
import { customSuccussResponse } from "../utils/customSuccess";
import { deleteVideoCloudinary } from "../utils/file upload/cloudinary";


export const createLectureController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        if (!req.file) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'error uploading lecture video'});
            return;
        }
        data.videoURL = req.file.path;
        const response = lectureCreateService(data);
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
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            return;
        }
        if (req.file) {
            data.videoURL = req.file.path;
        };
        const response = lectureUpdateService(data, id);
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
        const id = Number(req.params.id);
        const response = lectureDeleteService(id);
        res.status(StatusCodes.OK).json(customSuccussResponse("lecture updated Successfully", response))
    } catch (error) {
        console.log("delete course controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}