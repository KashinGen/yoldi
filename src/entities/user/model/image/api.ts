import { axiosInstance } from "@/shared/lib/axios";
import { ImageType } from "../types";
import { apiRoutes } from "@/shared/lib/api";

export const uploadImage = async (formData: FormData) => {
  const response = await axiosInstance.post<ImageType>(
    apiRoutes.image.post,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
