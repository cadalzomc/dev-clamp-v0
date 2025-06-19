export enum ECode {
    Error = "Error",
    Failed = "Failed",
    Invalid = "Invalid",
    NotFound = "NotFound",
    NotAllowed = "NotAllowed",
    Duplicate = "Duplicate",
    Timeout = "Timeout",
    Internal = "Internal",
    Success = "Success",
  }
  
  export interface IResponse<T> {
    code: ECode;
    message: string;
    data?: T;
  }