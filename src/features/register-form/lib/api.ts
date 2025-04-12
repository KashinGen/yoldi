import { apiRoutes } from "@/shared/lib/api";
import { RegisterFormValues } from "../model/schema";
import { axiosInstance } from "@/shared/lib/axios";


export const signUp  = async (data: RegisterFormValues) => {
    const response = await axiosInstance.post<{ value: string }>(apiRoutes.auth.sign_up, data);
    return response.data;
};