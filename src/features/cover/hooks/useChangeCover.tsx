import { useUser } from "@/entities/user";
import { editProfile } from "@/entities/user/model/api";
import {
  validateFile,
  imageSchema,
  uploadImage,
} from "@/entities/user/model/image";
import { ImageType } from "@/entities/user/model/types";
import { useRef } from "react";

type Props = {
  onApiCallSuccess: () => void;
  image?: ImageType | null;
};
export const useChangeCover = ({ onApiCallSuccess, image }: Props) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const { mutate, user } = useUser();
  const onBtnClick = async () => {
    if (image) {
      try {
        await editProfile({ ...user, coverId: null });
        mutate();
        onApiCallSuccess();
      } catch (e) {
        console.log(e);
      }
    } else {
      if (fileInput.current) {
        fileInput.current.click();
      }
    }
  };

  const handleImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = validateFile(file, imageSchema);
      if (isValid) {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const imageInfo = await uploadImage(formData);
          await editProfile({
            ...user,
            coverId: imageInfo.id,
          });
          mutate();
          onApiCallSuccess();
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  return {
    handleImgChange,
    onBtnClick,
    ref: fileInput,
  };
};
