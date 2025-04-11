import { useApiMutation } from "@/entities/user/model/useSwrMutation";
import { LoginFormValues } from "../model/schema";

const { trigger, isMutating } = useApiMutation<LoginFormValues>("/api/auth/login");

export const onSubmit = async (data: LoginFormValues) => {
  try {
    const response = await trigger();
    console.log(response); // Handle success (e.g., redirect or store token)
  } catch (error) {
    console.error(error); // Handle error
  }
};