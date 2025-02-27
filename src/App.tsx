import { indigo, pink, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import { deepmerge } from '@mui/utils';
import { Admin, defaultTheme, Resource } from 'react-admin';
import { dataProvider } from './data-provider';
import { authProvider } from './provider/auth-provider';
import { LoginPage } from './screen/LoginPage';
import { UserEdit } from './screen/UserEdit';
import { UserList } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const myTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: yellow,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },

  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          background: 'red',
        },
      },
    },
  },
});

const App = () => {
  return (
    <Admin theme={myTheme} loginPage={LoginPage} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />
      <Resource name='posts' list={UserList} show={UserShow} edit={UserEdit} />
    </Admin>
  );
};

export default App;
