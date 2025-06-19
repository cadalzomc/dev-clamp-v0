import bcrypt from "bcrypt";

export const HashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const result = bcrypt.hashSync(password, salt);
  return result;
};
