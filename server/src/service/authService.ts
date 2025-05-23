import { userRepository } from "../repository/userRepository"
import argon2 from 'argon2';
import { ApiError } from "../utils/Error/ApiError";
import { StatusCodes } from "http-status-codes";
import { createUserJWT } from "../helper/tokenSign";

export const userSingUpService = async(data:IUser)=>{
    try {
        let {username, email, password} = data;
        if (!username || !email || !password) {
            throw new ApiError({message:"All fields are required",statusCode:StatusCodes.FORBIDDEN})
        }
        const isUserExist = await userRepository.getUserByEmail(email);
        if(isUserExist){
            throw new ApiError({message:"User already exist",statusCode:StatusCodes.FORBIDDEN})
        }
        const hashedPassword = await argon2.hash(password);
        const response = await userRepository.createUser({
            username,
            email,
            password:hashedPassword
        });
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const userSingInService = async(data:IUser)=>{
    try {
        const {email, password} = data;
        if (!email || !password) {
            throw new ApiError({message:"All fields are required",statusCode:StatusCodes.FORBIDDEN})
        }
        const response = await userRepository.getUserByEmail(email);
        if(!response) throw new ApiError({message:"User not exist please sign up", statusCode:StatusCodes.NOT_FOUND});
        const isMatched = await argon2.verify(response.password,password);
        if(!isMatched) throw new ApiError({message:"Incorrect password", statusCode:StatusCodes.FORBIDDEN});
        return {
            id:response.id,
            username:response.username,
            email:response.email,
            token:createUserJWT({
                id:response.id,
                username:response.username,
                email:response.email
            })
        } 
    } catch (error) {
        console.log(error)
        throw error
    }
}