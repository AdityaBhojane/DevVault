import { authSingUpService } from "../service/authService"


export const signUpController = ()=>{
    try {
        const response = authSingUpService();
        
    } catch (error) {
        console.log(error)
    }
}