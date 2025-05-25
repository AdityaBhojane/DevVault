import { prisma } from "../config/prisma";


export const lectureRepository = {
    createLecture:async(data:ILecture)=> prisma.lecture.create({data}),
    updateLecture:async(data:ILecture, id:number)=> prisma.lecture.update({where:{id:id},data}),
    deleteLecture:async(id:number)=> prisma.lecture.delete({where:{id:id}})
}