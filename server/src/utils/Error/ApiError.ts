export class ApiError extends Error {
    statusCode: number;
    constructor(error: { message: string; statusCode: number; }){
        super();
        this.message=error.message,
        this.statusCode=error.statusCode? error.statusCode:400
    }
}