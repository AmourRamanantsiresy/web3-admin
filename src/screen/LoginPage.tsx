import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('log');

    login({ username, password, age: 10 }).catch(() => notify('Invalid username or password', { type: "warning" }));
  };

  return (
    <Box width='98vw' height='98vh' display='flex' justifyContent='center' alignItems='center'>
      <Card>
        <CardHeader title='Login' />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <input name='username' type='username' value={username} onChange={e => setUsername(e.target.value)} />
            <input name='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>login</button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};
