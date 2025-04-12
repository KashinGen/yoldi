'use client';
import useSWR from 'swr';
import { apiRoutes } from '@/shared/lib/api';
import { sessionService } from '@/shared/lib/session';
import { getMyProfile } from './api';

export const useUser = () => {


  const { data, isLoading, error, mutate } = useSWR([apiRoutes.profile, sessionService.get()], getMyProfile); 

  return {
    user: data,
    isLoading,
    error,
    mutate,
  };
};