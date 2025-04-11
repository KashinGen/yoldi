'use client';
import useSWR from "swr";
import { fetchAccounts } from "./api";
import { apiRoutes } from "@/shared/lib/api";

export const useGetAccounts = () => {
  const { data, error } = useSWR(apiRoutes.user.list, fetchAccounts);
  return {
    accounts: data,
    isLoading: !error && !data,
    error,
  };
};
