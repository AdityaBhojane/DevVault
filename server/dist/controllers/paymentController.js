"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoursePurchaseController = exports.verifyPaymentController = exports.paymentController = void 0;
const paymentService_1 = require("../service/paymentService");
const crypto_1 = __importDefault(require("crypto"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_codes_1 = require("http-status-codes");
dotenv_1.default.config();
const paymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const amount = req.body.amount;
        const response = yield (0, paymentService_1.createOrder)(amount);
        res.json({ orderId: response.id, amount: response.amount, currency: response.currency });
    }
    catch (error) {
        console.log("Payment Controller", error);
        res.status(500).json({ message: 'Error creating Razorpay order', error });
    }
});
exports.paymentController = paymentController;
const verifyPaymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount, courseId, status, userId } = req.body;
    // const userId = Number(req.user.id)
    const sign = crypto_1.default
        .createHmac('sha256', process.env.RZP_KEY)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');
    console.log(req.body);
    if (sign === razorpay_signature) {
        yield (0, paymentService_1.createCoursePurchase)({
            courseId,
            userId,
            amount,
            status,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            signature: razorpay_signature
        });
        res.json({ success: true, message: 'Payment verified successfully' });
    }
    else {
        yield (0, paymentService_1.createCoursePurchase)({
            courseId,
            userId,
            amount,
            status,
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            signature: razorpay_signature
        });
        res.status(http_status_codes_1.StatusCodes.OK).json({ success: false, message: 'payment failed' });
    }
});
exports.verifyPaymentController = verifyPaymentController;
const deleteCoursePurchaseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            throw new Error("invalid id");
        }
        const response = yield (0, paymentService_1.deleteCoursePurchase)(id);
        res.json({ success: true, message: 'deleted successfully', response });
    }
    catch (error) {
        console.log(error);
        res.status(http_status_codes_1.StatusCodes.OK).json({ success: false, message: 'unable to delete' });
    }
});
exports.deleteCoursePurchaseController = deleteCoursePurchaseController;
