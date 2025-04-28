import { userRepository } from "../repository/userRepository"


export const authSingUpService = async()=>{
    try {
        const response = await userRepository.createUser();
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}