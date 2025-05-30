import { prisma } from "../config/prisma";

// this CRUD repeated can be avoided!, i writing this to have some practice around prisma
export const courseRepository = {
    createCourse:async(data:ICourse)=> prisma.course.create({data}),
    updateCourse:async(data:ICourse,id:number)=> prisma.course.update({where:{id:id},data}),
    getCourse:async(id:number)=> prisma.course.findUnique({where:{id:id}}),
    deleteCourse:async(id:number)=> prisma.course.delete({where:{id:id}}),
    coursePurchaseCreate:async(data:ICoursePurchase)=> prisma.coursePurchase.create({data}),
    coursePurchaseDelete:async(id:number)=> prisma.coursePurchase.delete({where:{id:id}}),
    coursePurchaseUpdate:async(data:ICoursePurchase,id:number)=> prisma.coursePurchase.update({where:{id:id},data}),
}