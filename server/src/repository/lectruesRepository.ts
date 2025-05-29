import { prisma } from "../config/prisma";


export const lectureRepository = {
    createLecture:async(data:ILecture)=> prisma.lecture.create({data}),
    updateLecture:async(data:ILectureUpdate, id:number)=> prisma.lecture.update({where:{id:id},data}),
    getLecture:async(id:number)=> prisma.lecture.findUnique({where:{id:id}}),
    deleteLecture:async(id:number)=> prisma.lecture.delete({where:{id:id}})
}