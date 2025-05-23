import { prisma } from "../config/prisma";


export const userRepository = {
    createUser:async(data:IUser)=> await prisma.user.create({data}),
    updateUser:async(id:number,data:IUserCreate)=> await prisma.user.update({where:{id:id},data}),
    getUserById:async(id:number)=> await prisma.user.findUnique({where:{id:id}}),
    getUserByEmail:async(email:string)=> await prisma.user.findUnique({where:{email:email}}),
    deleteUserById:async(id:number)=> await prisma.user.delete({where:{id:id}}),
}