import Cookies from 'js-cookie';

import { SESSION_COOKIE_NAME } from '../const';





export const sessionService = {
  set: (token: string) => {
    console.log(token)
    Cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      expires: 3600,
    });
  },
  get: () => {
    return Cookies.get(SESSION_COOKIE_NAME);
  },
  remove: () => {
    Cookies.remove(SESSION_COOKIE_NAME, {
      path: '/',
    });
  },
};