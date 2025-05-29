import {sign} from "jsonwebtoken"
import { ADMIN_SECRET, TEACHER_SECRET, USER_SECRET } from "../config/serverConfig";

export const createUserJWT = (payload:IUserCreate)=>{
    return sign(payload,USER_SECRET)
};

export const createAdminJWT = (payload:IUserCreate)=>{
    return sign(payload,ADMIN_SECRET)
};

export const createTeacherJWT = (payload:IUserCreate)=>{
    return sign(payload,TEACHER_SECRET)
};

 