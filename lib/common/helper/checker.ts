import mongoose, { Model } from "mongoose";
import { IDuplicateState } from "@/lib/models";
import { IDocUser } from "@/lib/models/mongo/mongo.user";

type TCollection = IDocUser;

export const IsDuplicate = async <T>(table: string, payload: Partial<T>, fields: (keyof T)[]): Promise<IDuplicateState> => {
  let collection: Model<TCollection>;

  if (mongoose.models[table]) {
    collection = mongoose.models[table] as Model<TCollection>;
  } else {
    return {
      duplicate: true,
      message: `${table} is not defined.`,
    };
  }

  for (const field of fields) {
    if (!payload[field]) continue;

    const query = { [field]: payload[field] } as mongoose.FilterQuery<TCollection>;
    const exists = await collection.exists(query);

    if (exists) {
      return {
        duplicate: true,
        message: `${String(field).charAt(0).toUpperCase() + String(field).slice(1)} is already used`,
      };
    }
  }

  return {
    duplicate: false,
    message: "",
  };
};
