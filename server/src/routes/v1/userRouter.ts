import { Router } from "express";
import { signUpController } from "../../controllers/authController";


const userRouter = Router()

userRouter.post('/',signUpController);

export default userRouter