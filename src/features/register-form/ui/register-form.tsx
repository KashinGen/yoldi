"use client";
import { Form, Input, InputPassword } from "@/shared/ui";
import cls from "./register-form.module.scss";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { RegisterFormValues, registerSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import User from "@/shared/assets/icons/user.svg";
import Envelope from "@/shared/assets/icons/envelope.svg";
import Lock from "@/shared/assets/icons/lock-solid.svg";
import { signUp } from "../lib/api";
import { sessionService } from "@/shared/lib/session";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const formValues = watch();
  const router = useRouter();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const { value } = await signUp(data);
      sessionService.set(value);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      title={"Регистрация в Yoldi Agency"}
      submitText="Создать аккаунт"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      disabled={isSubmitting || !isValid}
    >
      <Input
        placeholder="Имя"
        type="text"
        {...register("name", { required: "Name is required" })}
        error={!!errors.name}
        icon={<User />}
        autoFocus
        value={formValues.name}
        containerClassName={cls.input}
      />
      <Input
        placeholder="E-mail"
        type="email"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        icon={<Envelope />}
        value={formValues.email}
        containerClassName={cls.input}
      />
      <InputPassword
        placeholder="Пароль"
        {...register("password", { required: "password is required" })}
        error={!!errors.password}
        containerClassName={cls.input}
        icon={<Lock />}
        value={formValues.password}
      />
    </Form>
  );
};
