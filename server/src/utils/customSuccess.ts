
interface CustomSuccessResponse<T> {
    success: boolean;
    message: string;
    response: T;
  }
  

export const customSuccussResponse = <T>(message:string,data:T):CustomSuccessResponse<T>=>{
    return {
        success:true,
        message:message,
        response:data
    }
}