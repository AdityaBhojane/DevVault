import e, { Request, Response } from "express";
import { userSingInService, userSingUpService } from "../service/authService"
import { customSuccussResponse } from "../utils/customSuccess";
import customErrorResponse from "../utils/customError";
import { StatusCodes } from "http-status-codes";


export const signUpController = async (req: Request, res: Response) => {
    try {
        const response = await userSingUpService(req.body);
        res.status(StatusCodes.OK).json(customSuccussResponse("Date fetched Successfully", response))
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
};

export const signInController = async (req: Request, res: Response) => {
    try {
        const response = await userSingInService(req.body);
        res.status(200).json(customSuccussResponse("sign in successful", response))
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).json(customErrorResponse(error))
    }
}