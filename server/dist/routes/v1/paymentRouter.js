"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../../controllers/paymentController");
const paymentRouter = (0, express_1.Router)();
paymentRouter.post('/', paymentController_1.paymentController);
paymentRouter.post('/verify', paymentController_1.verifyPaymentController);
paymentRouter.delete('/', paymentController_1.deleteCoursePurchaseController);
exports.default = paymentRouter;
