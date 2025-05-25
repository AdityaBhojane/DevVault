interface IUser{
    username:string,
    email:string,
    password:string,
};

interface IUserCreate{
    id?:number
    username?:string,
    email?:string,
    password?:string
    avatar?:string
    public_id?:string
    
}