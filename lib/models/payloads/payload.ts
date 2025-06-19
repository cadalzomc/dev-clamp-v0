import { TStatus } from "@/types/app.type";

export interface IPayloadUser {
  _id?: string;
  no?: string;
  username?: string;
  password: string;
  name: string;
  email: string;
  photo?: string;
  status?: TStatus;
}

export interface IPayloadRegister {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}
