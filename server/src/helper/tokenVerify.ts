import { verify } from 'jsonwebtoken';
import { ADMIN_SECRET, TEACHER_SECRET, USER_SECRET } from '../config/serverConfig';

export const JWTverifyUser = (token:string)=>{
    return verify(token,USER_SECRET)
};

export const JWTverifyAdmin = (token:string)=>{
    return verify(token,ADMIN_SECRET)
};

export const JWTverifyTeacher = (token:string)=>{
    return verify(token,TEACHER_SECRET)
}