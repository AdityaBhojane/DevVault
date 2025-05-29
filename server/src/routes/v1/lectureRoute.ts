import { Router } from "express";
import { createLectureController, deleteLectureController, updateLectureController } from "../../controllers/lectureController";
import validateUser from "../../middlewares/authMiddleware";
import { uploadVideo } from "../../utils/file upload/cloudinary";


const lectureRouter = Router();

lectureRouter.post('/', validateUser,uploadVideo.single('video'), createLectureController);
lectureRouter.put('/', validateUser,uploadVideo.single('video'), updateLectureController);
lectureRouter.delete('/', validateUser, deleteLectureController);

export default lectureRouter;