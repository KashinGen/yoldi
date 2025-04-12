import { getUser } from "@/entities/user/model/api";
import { ProfilePage } from "@/page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getUser(slug)();
  const title = data && data.name ? data.name : `Пользователь с id=${slug}`;
  const description =
    data && data.description
      ? data.description
      : `Описание пользователя с id=${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProfilePage slug={slug} />;
}
