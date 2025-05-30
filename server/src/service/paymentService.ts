import { instance } from "../config/razorpay"
import { courseRepository } from "../repository/courseRepository";


export const createOrder = async (amount:number) => {
    try {
        const options = {
            amount: Number(amount) * 100,
            currency: 'INR',
            receipt: 'order_DevVault_11',
        };

        const order = await instance.orders.create(options);
        return order
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const createCoursePurchase = async(data:ICoursePurchase)=>{
    try {
        const response = await courseRepository.coursePurchaseCreate(data);
        return response
    } catch (error) { 
        console.log('course purchase error ', error);
        throw error
    }
}

export const deleteCoursePurchase = async(id:number)=>{
    try {
        const response = await courseRepository.coursePurchaseDelete(id);
        return response
    } catch (error) { 
        console.log('course purchase error ', error);
        throw error
    }
}
