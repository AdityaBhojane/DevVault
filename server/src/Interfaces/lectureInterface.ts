interface ILecture{
    title:string,
    description:string,
    videoURL:string,
    public_id?:string,
    courseId:number
}

interface ILectureUpdate{
    title?:string,
    description?:string,
    videoURL?:string,
    public_id?:string,
    courseId?:number
}