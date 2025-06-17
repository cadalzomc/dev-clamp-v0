import { FormEvent } from "react";

export const FormValues = <T>(event: FormEvent<HTMLFormElement>): T => {
  const formData = new FormData(event.currentTarget);
  const formValues: Record<string, string> = {};

  formData.forEach((value, key) => {
    formValues[key] = value as string;
  });
  return formValues as unknown as T;
};
