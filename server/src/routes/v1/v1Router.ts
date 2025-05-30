import { Router } from "express";
import userRouter from "./userRouter";
import courseRouter from "./courseRouter";
import lectureRouter from "./lectureRoute";
import paymentRouter from "./paymentRouter";


const router = Router();

router.use('/user', userRouter);
router.use('/course', courseRouter);
router.use('/lecture', lectureRouter);
router.use('/razorpay', paymentRouter);

export default router
