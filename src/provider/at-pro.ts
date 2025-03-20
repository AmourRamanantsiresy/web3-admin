import { AuthProvider, QueryFunctionContext } from 'react-admin';

const authProvider: AuthProvider = {
  login: async function ({ username, password }: any): Promise<{ redirectTo?: string | boolean } | void | any> {
    const data = await fetch('api', {
      body: JSON.stringify({ username, password }),
      method: 'POST',
    });

    if (data.status !== 200) throw new Error('Bad credentials');

    const { accessToken } = await data.json();

    localStorage.setItem('token', accessToken);

    return '/';
  },
  logout: function (params: any): Promise<void | false | string> {
    localStorage.removeItem('token');
  },
  checkAuth: async function (params: any & QueryFunctionContext): Promise<void> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token');
    }

    const ping = await fetch('/ping', { headers: { Authorization: 'bearer ' + token } });
    if (ping.status !== 200) {
      throw new Error('Token expired');
    }
  },
  checkError: async function (error: any): Promise<void> {
    if (error.status === 429) {
      throw new Error('Try later');
    }
    if (error.status === 404) {
      throw new Error('Object not found');
    }
    if ([403, 401].includes(error.status)) {
      localStorage.removeItem('token');
      throw new Error('Token expired');
    }
  },
};
