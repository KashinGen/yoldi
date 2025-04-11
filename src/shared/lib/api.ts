export const apiRoutes = {
    auth: {
      login: '/api/auth/login', // Получение списка пользователей
      sign_up: '/api/auth/sign-up', // Получение деталей пользователя
    },
    profile: '/api/profile',
    user: {
      list: '/api/user',
      details: (id: string) => `/api/user/${id}`,
    },
    image: {
        post: '/api/image',
        details: (id: string) => `/api/image/${id}`,
    }
};
  