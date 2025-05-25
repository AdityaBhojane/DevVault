import { Router } from "express";
import { createLectureController, deleteLectureController, updateLectureController } from "../../controllers/lectureController";
import validateUser from "../../middlewares/authMiddleware";


const lectureRouter = Router();

lectureRouter.post('/', validateUser, createLectureController);
lectureRouter.put('/', validateUser, updateLectureController);
lectureRouter.delete('/', validateUser, deleteLectureController);

export default lectureRouter;