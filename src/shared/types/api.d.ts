
export interface ErrorResponse {
    status: false,
    message: string,
    code: number
}

export interface SuccessResponse<T> {
    status: true,
    message?: string,
    payload: T
}

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse