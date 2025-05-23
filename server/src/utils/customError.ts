

export default function customErrorResponse(error: any) {
    if (!error.message) {
        return {
            success: false,
            error: "Internal Server Error"
        }
    }
    return ({
        success: false,
        error: error.message
    })
}