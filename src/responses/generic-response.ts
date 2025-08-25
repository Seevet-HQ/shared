export class GenericResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  timestamp: Date;

  constructor(data?: T, message?: string, success: boolean = true) {
    this.success = success;
    this.data = data;
    this.message = message;
    this.timestamp = new Date();
  }

  static success<T>(data: T, message?: string): GenericResponse<T> {
    return new GenericResponse(data, message, true);
  }

  static error<T>(message: string, data?: T): GenericResponse<T> {
    return new GenericResponse(data, message, false);
  }

  static fromError(error: Error): GenericResponse<null> {
    return new GenericResponse(null, error.message, false);
  }
}
