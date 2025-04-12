import { User } from "@/entities/user/model/types";
import { editProfileValues } from "../model/schema";
import { axiosInstance } from "@/shared/lib/axios";
import { apiRoutes } from "@/shared/lib/api";

export const editProfile = async (data: editProfileValues) => {
  const response = await axiosInstance.patch<User>(apiRoutes.profile, data);
  return response.data;
};
