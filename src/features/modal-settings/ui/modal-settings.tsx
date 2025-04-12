import { BadgeInput, Button, Input, Modal, Textarea } from '@/shared/ui';
import cls from './modal-settings.module.scss';
import { LabelledInput } from '@/shared/ui/labelled-input';
import { editProfileSchema, editProfileValues } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {  useForm } from 'react-hook-form';

interface ModalSettingsProps {
  onClose: () => void;
}

export const ModalSettings = ( { onClose }: ModalSettingsProps ) => {
      const { register, handleSubmit, formState: { errors }, watch } = useForm<editProfileValues>({
          resolver: zodResolver(editProfileSchema),
        });
        const formValues = watch();
      
        const onSubmit = async (data: editProfileValues) => {
          console.log(data)
          // try {
          //   const response = await loginUser(data);
          //   console.log("Logged in!", response);
          // } catch (error) {
          //   console.error("Login failed", error);
          // }
        };
        
  return (
    <Modal onClose={onClose} baseHeight={579}>
      <div className={cls.inner}>
        <h2 className={cls.title}>Редактировать профиль</h2>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className={cls.form}>
            <div className={cls.formGroup}>
                <LabelledInput label='Имя'>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      error={!!errors.name}
                      autoFocus 
                      value={formValues.name}
                    />
                </LabelledInput>
                <LabelledInput label='Адрес профиля'>
                    <BadgeInput
                      {...register("slug", { required: "Slug is required" })}
                      error={!!errors.slug}
                      value={formValues.slug}
                      badgeText='example.com/'
                    />
                </LabelledInput>
                <LabelledInput label='Описание'>
                    <Textarea
                      {...register("description", { required: "Description is required" })}
                      error={!!errors.description}
                      value={formValues.description}
                    />
                </LabelledInput>
            </div>
            <div className={cls.btnGroup}>
                <Button type="button" variant='outline' onClick={onClose} className={cls.btn}>Отмена</Button>
                <Button type="submit" className={cls.btn}>Сохранить</Button>
            </div>
        </form>
      </div>
    </Modal>
  );
};
