import { BadgeInput, Button, Input, Modal, Textarea } from "@/shared/ui";
import cls from "./modal-settings.module.scss";
import { LabelledInput } from "@/shared/ui/labelled-input";
import { editProfileSchema, editProfileValues } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User } from "@/entities/user/model/types";
import { editProfile } from "@/entities/user/model/api";
import { useUser } from "@/entities/user";

interface ModalSettingsProps {
  onClose: () => void;
  onSuccess: () => void;
  account: User;
}

export const ModalSettings = ({
  onClose,
  onSuccess,
  account,
}: ModalSettingsProps) => {
  const { mutate } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<editProfileValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: account.name,
      slug: account.slug,
      description: account.description,
    },
  });
  const formValues = watch();

  const onSubmit = async (data: editProfileValues) => {
    try {
      await editProfile(data);
      mutate();
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={onClose} baseHeight={579}>
      <div className={cls.inner}>
        <h2 className={cls.title}>Редактировать профиль</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className={cls.form}
        >
          <div className={cls.formGroup}>
            <LabelledInput label="Имя">
              <Input
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                autoFocus
                value={formValues.name}
              />
            </LabelledInput>
            <LabelledInput label="Адрес профиля">
              <BadgeInput
                {...register("slug", { required: "Slug is required" })}
                error={!!errors.slug}
                value={formValues.slug}
                badgeText="example.com/"
              />
            </LabelledInput>
            <LabelledInput label="Описание">
              <Textarea
                {...register("description", {
                  required: "Description is required",
                })}
                error={!!errors.description}
                value={formValues.description}
              />
            </LabelledInput>
          </div>
          <div className={cls.btnGroup}>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className={cls.btn}
            >
              Отмена
            </Button>
            <Button type="submit" className={cls.btn}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
