import mongoose, { Model, Schema } from "mongoose";
import { IDocument, IStamp } from "@/lib/models";
import { TStatus } from "@/types/app.type";

export interface IDocUser extends IDocument {
  no: string;
  code: string;
  username: string;
  password: string;
  name: string;
  email: string;
  photo?: string;
  lastLogin?: string;
  status: TStatus;
}

const schemaStamp = new Schema(
  {
    createdBy: { type: String, default: "" },
    createdAt: { type: String, default: new Date().toISOString() },
    updatedBy: { type: String, default: "" },
    updatedAt: { type: String, default: "" },
  },
  { _id: false }
);

const schema = new Schema<IDocUser>({
  no: { type: String, required: true, unique: true },
  code: { type: String, default: "" },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true, index: true },
  email: { type: String, default: "" },
  photo: { type: String, default: "" },
  lastLogin: { type: String, default: "" },
  status: { type: String, default: "UNVERIFIED" },
  stamp: schemaStamp,
});

const Users: Model<IDocUser> = mongoose.models?.Users ?? mongoose.model<IDocUser>("Users", schema);

export default Users;
