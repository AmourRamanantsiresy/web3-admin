import { AuthProvider, QueryFunctionContext } from 'react-admin';

const authProvider: AuthProvider = {
  login: async function (params: any): Promise<{ redirectTo?: string | boolean } | void | any> {
    const { username, password } = params;

    const loginResult = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (loginResult.status !== 200) {
      throw new Error('Diso');
    }

    const { accessToken } = await loginResult.json();

    localStorage.setItem('accessToken', accessToken);

    return {
      redirectTo: '/',
    };
  },
  logout: async function (params: any): Promise<void | false | string> {
    localStorage.removeItem('accessToken');
  },
  checkAuth: async function (params: any & QueryFunctionContext): Promise<void> {
    const accessToken = localStorage.getItem('accessToken');

    const me = await fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (me.status === 401) {
      throw new Error('Tsy connecter tsony');
    }
  },
  checkError: function (error: any): Promise<void> {
    const { status } = error;

    if (status === 401 && status === 403) {
      throw new Error('Token error');
    }
  },
};
