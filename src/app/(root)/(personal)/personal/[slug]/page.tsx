import { ProfilePage } from "@/page";

export default async function Page({
    params,
  }: {
    params:  Promise<{ slug: string }>
  }) {
    const { slug } =  await params;
    return (
      <ProfilePage slug={slug}/>
    )
  }