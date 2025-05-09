import { axiosInstance } from "@/shared/lib/axios";
import { EditUserValues, User } from "./types";
import { apiRoutes } from "@/shared/lib/api";

export const getUser = (slug: string) => async () => {
  const response = await axiosInstance.get<User>(apiRoutes.user.details(slug));
  return response.data;
};

export const getMyProfile = async () => {
  const response = await axiosInstance.get<User>(apiRoutes.profile);
  return response.data;
};

export const editProfile = async (data: Partial<EditUserValues>) => {
  const response = await axiosInstance.patch<User>(apiRoutes.profile, data);
  return response.data;
};
