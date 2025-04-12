"use client";
import { useUser, useProfile, UserInfo } from "@/entities/user";
import { Cover } from "@/features";
import { Spinner } from "@/shared/ui";

export const ProfilePage = ({ slug }: { slug: string }) => {
  const { user, isLoading: userLoading } = useUser();
  const { profile, isLoading: accountLoading, mutate } = useProfile(slug);

  if (userLoading || accountLoading)
    return (
      <div className="loading-container">
        <Spinner />
      </div>
    );

  if (!profile)
    return <div className="loading-container">Failed to load data</div>;

  const isOwner = user && user.slug === profile.slug; // Проверка, владелец ли страницы

  return (
    <>
      <Cover
        image={profile.cover}
        isEditable={!!isOwner}
        onApiCallSuccess={mutate}
      />
      <UserInfo account={profile} isOwner={!!isOwner} mutate={mutate} />
    </>
  );
};
