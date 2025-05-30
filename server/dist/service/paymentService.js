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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoursePurchase = exports.createCoursePurchase = exports.createOrder = void 0;
const razorpay_1 = require("../config/razorpay");
const courseRepository_1 = require("../repository/courseRepository");
const createOrder = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = {
            amount: Number(amount) * 100,
            currency: 'INR',
            receipt: 'order_DevVault_11',
        };
        const order = yield razorpay_1.instance.orders.create(options);
        return order;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.createOrder = createOrder;
const createCoursePurchase = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield courseRepository_1.courseRepository.coursePurchaseCreate(data);
        return response;
    }
    catch (error) {
        console.log('course purchase error ', error);
        throw error;
    }
});
exports.createCoursePurchase = createCoursePurchase;
const deleteCoursePurchase = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield courseRepository_1.courseRepository.coursePurchaseDelete(id);
        return response;
    }
    catch (error) {
        console.log('course purchase error ', error);
        throw error;
    }
});
exports.deleteCoursePurchase = deleteCoursePurchase;
