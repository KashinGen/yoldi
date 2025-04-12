import { ChangeEvent } from "react";
import { useUser } from "../model";
import { editProfile } from "../model/api";
import { validateFile, imageSchema, uploadImage } from "../model/image";

export const useChangeAvatar = (callback: (() => void) | undefined) => {
  const { mutate, user } = useUser();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = validateFile(file, imageSchema);
      if (isValid) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const imageInfo = await uploadImage(formData);
          await editProfile({ ...user, imageId: imageInfo.id });
          mutate();

          callback?.();
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  return handleFileChange;
};
