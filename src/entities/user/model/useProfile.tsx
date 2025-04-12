"use client";
import { apiRoutes } from "@/shared/lib/api";
import useSWR from "swr";
import { getUser } from "./api";

export const useProfile = (slug: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    [apiRoutes.user.details(slug), slug],
    getUser(slug),
  );

  return {
    profile: data,
    isLoading,
    error,
    mutate,
  };
};
