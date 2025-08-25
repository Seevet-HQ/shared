import { GenericResponse } from './generic-response';

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export class PaginationResponse<T = any> extends GenericResponse<T[]> {
  pagination: PaginationMeta;

  constructor(
    data: T[],
    pagination: PaginationMeta,
    message?: string,
    success: boolean = true
  ) {
    super(data, message, success);
    this.pagination = pagination;
  }

  static create<T>(
    data: T[],
    page: number,
    limit: number,
    total: number,
    message?: string
  ): PaginationResponse<T> {
    const totalPages = Math.ceil(total / limit);
    const pagination: PaginationMeta = {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    };

    return new PaginationResponse(data, pagination, message, true);
  }

  static empty<T>(page: number = 1, limit: number = 10): PaginationResponse<T> {
    return PaginationResponse.create<T>([], page, limit, 0, 'No data found');
  }
}
