import { Request, Response } from "express";
import { createCoursePurchase, createOrder, deleteCoursePurchase } from "../service/paymentService"
import crypto from 'crypto';
import dotenv from 'dotenv'
import { StatusCodes } from "http-status-codes";
dotenv.config()

export const paymentController = async (req: Request, res: Response) => {
    try {
        const amount = req.body.amount;
        const response = await createOrder(amount);
        res.json({ orderId: response.id, amount: response.amount, currency: response.currency });
    } catch (error) {
        console.log("Payment Controller", error)
        res.status(500).json({ message: 'Error creating Razorpay order', error });
    }
};

export const verifyPaymentController = async (req: Request, res: Response) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, courseId, status, userId } = req.body;
    // const userId = Number(req.user.id)
    const sign = crypto
        .createHmac('sha256', process.env.RZP_KEY as string)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');
    console.log(req.body);
    if (sign === razorpay_signature) {
        await createCoursePurchase({
            courseId,
            userId,
            amount,  
            status,
            paymentId:razorpay_payment_id, 
            orderId:razorpay_order_id,
            signature:razorpay_signature 
        })
        res.json({ success: true, message: 'Payment verified successfully' });
    } else {

        await createCoursePurchase({
            courseId,
            userId,
            amount,  
            status,
            paymentId:razorpay_payment_id, 
            orderId:razorpay_order_id,
            signature:razorpay_signature 
        })
        res.status(StatusCodes.OK).json({ success: false, message: 'payment failed' });
    }
};

export const deleteCoursePurchaseController = async(req: Request, res: Response)=>{
    try {
        const id = Number(req.query.id);
        if(isNaN(id)){
            throw new Error("invalid id")
        }
        const response = await deleteCoursePurchase(id);
        res.json({ success: true, message: 'deleted successfully', response });
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.OK).json({ success: false, message: 'unable to delete' });
    }
}