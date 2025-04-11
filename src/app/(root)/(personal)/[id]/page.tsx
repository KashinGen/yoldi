import { UserInfo } from "@/entities/user"
import { Cover } from "@/features"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params;
    const user = {
      name: 'Владислав',
      email: 'example@gmail.com',
      description: 'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'
    }
    return (
      <>
        <Cover/>
        <UserInfo name={user.name} email={user.email} descripton={user.description}/>
      </>
    )
  }