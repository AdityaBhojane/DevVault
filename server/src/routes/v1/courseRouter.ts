import { Router } from "express";
import { createCourseController, deleteCourseController, getCourseController, updateCourseController } from "../../controllers/courseController";
import validateUser from "../../middlewares/authMiddleware";
import { upload } from "../../utils/file upload/cloudinary";


const courseRouter = Router();

courseRouter.post('/', validateUser,upload.single('thumbnail'), createCourseController);
courseRouter.put('/', validateUser,upload.single('thumbnail'),updateCourseController);
courseRouter.get('/', validateUser,getCourseController);
courseRouter.delete('/', validateUser,deleteCourseController);

export default courseRouter;