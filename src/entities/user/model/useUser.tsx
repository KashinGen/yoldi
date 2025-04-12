'use client';
import useSWR from 'swr';
import { apiRoutes } from '@/shared/lib/api';
import { axiosInstance } from '@/shared/lib/axios';
import { User } from './types';
import { sessionService } from '@/shared/lib/session';

export const useUser = () => {
  const getMyProfile = async () => {
    const response = await axiosInstance.get<User>(apiRoutes.profile);
    return response.data;
  };

  const { data, isLoading, error, mutate } = useSWR([apiRoutes.profile, sessionService.get()], getMyProfile); 

  return {
    user: data,
    isLoading,
    error,
    mutate,
  };
};