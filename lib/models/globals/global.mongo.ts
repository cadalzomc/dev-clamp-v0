import { Document } from "mongoose";
import { IStamp } from "@/lib/models";

export interface IDocument extends Document {
  stamp?: IStamp;
}