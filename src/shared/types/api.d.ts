export interface ErrorResponse {
  status: false;
  message: string;
  code: number;
}

export interface SuccessResponse<T> {
  status: true;
  message?: string;
  payload: T;
}

export type APIResponse<T> = SuccessResponse<T> | ErrorResponse;

export interface IPaginationResponse<T> {
    data: T[];
    metadata: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    }
}

export interface IDocumentFields {
  createdAt: string;
  updatedAt: string;
}
