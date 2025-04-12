"use client";
import { Form, Input, InputPassword } from "@/shared/ui";
import cls from "./login-form.module.scss";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Envelope from "@/shared/assets/icons/envelope.svg";
import Lock from "@/shared/assets/icons/lock-solid.svg";
import { useRouter } from "next/navigation";
import { signIn } from "../lib/api";
import { sessionService } from "@/shared/lib/session";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const formValues = watch();
  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const { value } = await signIn(data);
      sessionService.set(value);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      title={"Вход в Yoldi Agency"}
      submitText="Войти"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      disabled={isSubmitting || !isValid}
    >
      <Input
        placeholder="E-mail"
        type="email"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        icon={<Envelope />}
        autoFocus
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
