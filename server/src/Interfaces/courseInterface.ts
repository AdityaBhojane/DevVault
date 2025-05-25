
interface ICourse {
    title: string,
    subtitle: string,
    description: string,
    category: string,
    price: string,
    thumbnail: string,
    createdAt: Date,
    updatedAt: Date,
}

interface ICoursePurchase {
    courseId:number,
    userId:number,
    amount:number,
    status:string,
    paymentId:number,
    
}