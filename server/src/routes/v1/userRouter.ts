import { Router } from "express";
import { signInController, signUpController } from "../../controllers/authController";
import { updateUserController } from "../../controllers/userController";
import { upload } from "../../utils/file upload/cloudinary";


const userRouter = Router()
 
userRouter.post('/signup',signUpController);
userRouter.post('/signin',signInController);
userRouter.post('/update',upload.single('image'), updateUserController);


export default userRouter