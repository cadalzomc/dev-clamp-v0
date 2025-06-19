import { GenerateTN } from "@/lib/common";
import { HashPassword } from "@/lib/common/cipher";
import { MongoDbConnect } from "@/lib/common/db/db.conn";
import { IsDuplicate } from "@/lib/common/helper/checker";
import { ECode, IPayloadUser, IResponse } from "@/lib/models";
import Users from "@/lib/models/mongo/mongo.user";

export const UserCreate = async (payload: IPayloadUser): Promise<IResponse<undefined>> => {
  try {
    await MongoDbConnect();

    if (!Users) {
      return {
        code: ECode.Internal,
        message: "No user collection",
      };
    }

    const dup = await IsDuplicate<IPayloadUser>("Users", payload, ["name", "email"]);

    if (dup.duplicate) {
      return {
        code: ECode.Duplicate,
        message: dup.message,
      };
    }

    const HashPW = HashPassword(payload.password);
    const no = GenerateTN("USR");
    const username = payload.name.toLowerCase().split(" ").join("_");

    const newUser = {
      ...payload,
      password: HashPW,
      no,
      username,
      status: "UNVERIFIED",
      stamp: {
        createdAt: new Date().toISOString(),
      },
    };

    await Users.create(newUser);
    return {
      code: ECode.Success,
      message: "User is successfully created",
    };
  } catch (error) {
    console.error("[UserCreate]", { error });
    return {
      code: ECode.Error,
      message: "Something went wrong",
    };
  }
};
