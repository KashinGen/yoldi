"use client";
import useSWR from "swr";
import { getUsers } from "./api";
import { apiRoutes } from "@/shared/lib/api";

export const useGetAccounts = () => {
  const { data, isLoading, error, mutate } = useSWR(
    apiRoutes.user.list,
    getUsers,
  );
  return {
    accounts: data ?? [],
    isLoading,
    error,
    mutate,
  };
};
