import { format } from "date-fns";
import { RandomCode } from "./random";

export const GenerateTN = (prefix: string, digit: number = 5) => {
  const cCode = RandomCode(digit);
  const cDate = format(new Date(), "yyyyMMdd");
  const cTime = format(new Date(), "HHmm");
  return `${prefix}${cDate}-${cCode}${cTime}`;
};
