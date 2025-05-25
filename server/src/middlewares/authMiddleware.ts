import { NextFunction, Request, Response } from "express"
import { USER_SECRET } from "../config/serverConfig"
import { StatusCodes } from "http-status-codes";
import customErrorResponse from "../utils/customError";
import { verify } from "jsonwebtoken";

declare module "express-serve-static-core" {
    interface Request {
      user?: any; 
    }
  }

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['x-access-token'] as string;
        if (!token) {
            res.status(StatusCodes.UNAUTHORIZED).json(customErrorResponse("token not found"));
        };
        const decode = verify(token, USER_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.UNAUTHORIZED).json({ message: "Unauthorized: Invalid token" });  
    }
}

export default validateUser;