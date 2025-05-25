import { Router } from "express";
import { createCourseController, deleteCourseController, getCourseController, updateCourseController } from "../../controllers/courseController";
import validateUser from "../../middlewares/authMiddleware";


const courseRouter = Router();

courseRouter.post('/', validateUser,createCourseController);
courseRouter.put('/', validateUser,updateCourseController);
courseRouter.get('/', validateUser,getCourseController);
courseRouter.delete('/', validateUser,deleteCourseController);

export default courseRouter;