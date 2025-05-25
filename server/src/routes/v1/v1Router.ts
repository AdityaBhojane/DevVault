import { Router } from "express";
import userRouter from "./userRouter";
import courseRouter from "./courseRouter";
import lectureRouter from "./lectureRoute";


const router = Router();

router.use('/user', userRouter);
router.use('/course', courseRouter);
router.use('/lecture', lectureRouter);

export default router
