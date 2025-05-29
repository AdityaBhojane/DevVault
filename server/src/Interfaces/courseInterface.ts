
interface ICourse {
    title: string,
    subtitle: string,
    description: string,
    category: string,
    price: string,
    public_id:string,
    thumbnail: string,
    createdAt: Date,
    updatedAt: Date,
}

interface ICoursePurchase {
    courseId:number,
    userId:number,
    amount:number,
    paymentId:number,
    
}