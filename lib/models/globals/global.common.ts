interface IContact {
    name?: string;
    email?: string;
    mobile?: string[];
  }
  
  interface IDuplicateState {
    duplicate: boolean;
    message: string;
  }
  interface ISessionUser {
    id?: string;
    name?: string;
  }
  
  interface IChangeEditor {
    id?: string;
    name?: string;
    role?: string;
  }
  
  interface IValidation {
    success: boolean;
    errors: Record<string, string>;
  }
  
  interface IStamp {
    createdAt?: string;
    createdBy?: string;
    createdById?: string;
    updatedAt?: string;
    updatedBy?: string;
    updatedById?: string;
  }
  interface IS3File {
    key: string;
    url?: string;
    size?: number;
    type?: string;
  }
  
  export type { IContact, IChangeEditor, ISessionUser, IStamp, IS3File, IValidation, IDuplicateState };
  