import mongoose, { Model, Schema } from "mongoose";
import { IDocument, IStamp } from "@/lib/models";

export interface IDocUser extends IDocument {
  no: string;
  code: string;
  username: string;
  password: string;
  role: string;
  name: string;
  email: string;
  photo?: string;
  active: boolean;
  lastLogin?: string;
  stamp?: IStamp;
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
  role: { type: String, default: "Member" },
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, default: "" },
  active: { type: Boolean, required: true },
  lastLogin: { type: String, default: "" },
  stamp: schemaStamp,
});

const Users: Model<IDocUser> =
  mongoose.models?.Users ?? mongoose.model<IDocUser>("Users", schema);

export default Users;
