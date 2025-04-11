'use client'
import { Form, Input, InputPassword } from '@/shared/ui';
import cls from './register-form.module.scss';
import classNames from 'classnames';

import { SubmitHandler, useForm } from 'react-hook-form';
import {  RegisterFormValues, registerSchema } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import User from '@/shared/assets/icons/user.svg'
import Envelope from '@/shared/assets/icons/envelope.svg'
import Lock from '@/shared/assets/icons/lock-solid.svg'


type RegisterFormProps = {
    className?: string;
};

  
export const RegisterForm = ({ className = '' }: RegisterFormProps) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
      });
      const formValues = watch();
    
      const onSubmit = async (data: RegisterFormValues) => {
        console.log(data)
        // try {
        //   const response = await loginUser(data);
        //   console.log("Logged in!", response);
        // } catch (error) {
        //   console.error("Login failed", error);
        // }
      };

    return (
        <Form
            title={'Регистрация в Yoldi Agency'}
            submitText='Создать аккаунт'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            disabled={!formValues.email || !formValues.password}
            >
                <Input placeholder='Имя' type='text'
                    {...register("name", { required: "Name is required" })}
                    error={!!errors.name}
                    icon={<User/>}
                    autoFocus 
                    value={formValues.name}
                    containerClassName={cls.input}

                />
                <Input placeholder='E-mail' type='email'
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                    icon={<Envelope/>}
                    autoFocus 
                    value={formValues.email}
                    containerClassName={cls.input}

                />
                <InputPassword placeholder='Пароль'
                    {...register("password", { required: "password is required" })}
                    error={!!errors.password}
                    containerClassName={cls.input}
                    icon={<Lock/>}
                    value={formValues.password}
                />
        </Form>
    )
}