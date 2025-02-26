import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  login: async function (params: any): Promise<{ redirectTo?: string | boolean } | void | any> {
    const { username, password } = params;

    const loginResult = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include',
    });

    const { accessToken } = await loginResult.json();
    localStorage.setItem('accessToken', accessToken);
    return { redirectTo: '/' };
  },
  logout: async function (): Promise<void | false | string> {
    localStorage.removeItem('accessToken');
    return '/login';
  },
  checkAuth: async function (): Promise<void> {
    const accessToken = localStorage.getItem('accessToken');
    await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    });
  },
  checkError: async function (error: any): Promise<void> {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      throw new Error('Session expired');
    }
  },
};
