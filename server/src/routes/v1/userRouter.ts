import { Router } from "express";
import { signInController, signUpController } from "../../controllers/authController";
import { deleteUserController, updateUserController } from "../../controllers/userController";
import { upload } from "../../utils/file upload/cloudinary";
import validateUser from "../../middlewares/authMiddleware";


const userRouter = Router()
 
userRouter.post('/signup',signUpController);
userRouter.post('/signin',signInController);
userRouter.put('/',validateUser, upload.single('avatar'), updateUserController);
userRouter.delete('/',validateUser, deleteUserController);

 
export default userRouter