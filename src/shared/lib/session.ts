import Cookies from 'js-cookie';

import { SESSION_COOKIE_NAME } from '../const';





export const sessionService = {
  set: (token: string) => {
   Cookies.set(SESSION_COOKIE_NAME, token, {
      expires: 5,
      path: '/',
      sameSite: 'strict',
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