import { LoginFormValues } from "../model/schema";
import { axiosInstance } from "@/shared/lib/axios";
import { apiRoutes } from "@/shared/lib/api";

export const signIn = async (data: LoginFormValues) => {
  const response = await axiosInstance.post<{ value: string }>(
    apiRoutes.auth.login,
    data,
  );
  return response.data;
};
