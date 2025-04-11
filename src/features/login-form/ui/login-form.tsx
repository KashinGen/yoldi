'use client'
import { Form, Input, InputPassword } from '@/shared/ui';
import cls from './login-form.module.scss';
import classNames from 'classnames';

import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues, loginSchema } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Envelope from '@/shared/assets/icons/envelope.svg'
import Lock from '@/shared/assets/icons/lock-solid.svg'


type LoginFormProps = {
    className?: string;
};

  
export const LoginForm = ({ className = '' }: LoginFormProps) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
      });
      const formValues = watch();
    
      const onSubmit = async (data: LoginFormValues) => {
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
            title={'Вход в Yoldi Agency'}
            submitText='Войти'
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            disabled={!formValues.email || !formValues.password}
            >
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