import { Router } from "express";
import { deleteCoursePurchaseController, paymentController, verifyPaymentController } from "../../controllers/paymentController";
import validateUser from "../../middlewares/authMiddleware";


const paymentRouter = Router();

paymentRouter.post('/', paymentController);
paymentRouter.post('/verify', verifyPaymentController);
paymentRouter.delete('/', deleteCoursePurchaseController);

export default paymentRouter