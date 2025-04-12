'use client'
import { useUser, useProfile, UserInfo } from "@/entities/user";
import { Cover } from "@/features";

export const ProfilePage = ({slug}: {slug: string} ) => {
  const { user, isLoading: userLoading } = useUser();
  const { profile, isLoading: accountLoading } = useProfile(slug);

  if (userLoading || accountLoading) return <p>Loading...</p>;
  if (!profile) return <p>Failed to load data</p>;

  const isOwner = user && user.slug === profile.slug; // Проверка, владелец ли страницы
  
  return (
    <>
      <Cover/>
      <UserInfo account={profile} isOwner={!!isOwner}/>
    </>
  )
  };