import { StatusCodes } from "http-status-codes";
import { courseCreateService, courseDeleteService, courseGetService, courseUpdateService } from "../service/courseServie"
import customErrorResponse from "../utils/customError";
import { customSuccussResponse } from "../utils/customSuccess";
import { Request, Response } from "express";
import { deleteImageCloudinary } from "../utils/file upload/cloudinary";

export const createCourseController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        if (!req.file) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'error in uploading thumbnail'});
            return;
        }
        data.thumbnail = req.file.path;
        data.public_id = req.file.filename;
        console.log(data);
        const response = await courseCreateService(data);
        res.status(StatusCodes.OK).json(customSuccussResponse("course created Successfully", response))
    } catch (error) {
        console.log("create course controller error", error);
        if (req.file) {
            console.log(req.file)
            await deleteImageCloudinary(req.file.filename)
        }
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}

export const updateCourseController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = Number(req.query.id);
        console.log("data ",data,id)
        if (!id && isNaN(id)) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            return;
        }
        if (req.file) {
            data.thumbnail = req.file.path;
            data.public_id = req.file.filename;
        }
        const response = await courseUpdateService(data, id);
        res.status(StatusCodes.OK).json(customSuccussResponse("course updated Successfully", response))
    } catch (error) {
        console.log("update course controller error", error);
        if (req.file) {
            console.log(req.file)
            await deleteImageCloudinary(req.file.filename)
        }
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}

export const getCourseController =  async(req: Request, res: Response)=>{
    try {
       const id = Number(req.query.id);
        if (isNaN(id)) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            return;
        };
        const response = await courseGetService(id);
        res.status(StatusCodes.OK).json(customSuccussResponse("course fetched Successfully", response))
    } catch (error) {
        console.log("get course controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
};

export const deleteCourseController =  async(req: Request, res: Response)=>{
    try {
       const id = Number(req.query.id);
        if (isNaN(id)) {
            res.status(StatusCodes.FORBIDDEN).json({success:false, error:'course id is required'});
            return;
        };
        const response = await courseDeleteService(id);
        res.status(StatusCodes.OK).json(customSuccussResponse("course deleted Successfully", response))
    } catch (error) {
        console.log("delete course controller error", error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}