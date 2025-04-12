'use client';
import { apiRoutes } from '@/shared/lib/api';
import { axiosInstance } from '@/shared/lib/axios';
import useSWR from 'swr';
import { User } from './types';

export const useProfile = (slug: string) => {
  const getUser = (slug: string) => async () => {
    const response = await axiosInstance.get<User>(apiRoutes.user.details(slug));
    return response.data;
  };

  const { data, isLoading, error, mutate } = useSWR([apiRoutes.user.details(slug), slug], getUser(slug)); 

  return {
    profile: data,
    isLoading,
    error,
    mutate,
  };
};