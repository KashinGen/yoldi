import { User } from "@/entities/user/model/types";
import { apiRoutes } from "@/shared/lib/api";
import { axiosInstance } from "@/shared/lib/axios";

export const getUsers = async () => {
  const response = await axiosInstance.get<User[]>(apiRoutes.user.list);
  return response.data;
};
