import { blue, green, red } from '@mui/material/colors';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './data-provider';
import { authProvider } from './provider/auth-provider';
import { LoginPage } from './screen/LoginPage';
import { UserEdit } from './screen/UserEdit';
import { UserList } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const myTheme = {
  palette: {
    primary: green,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          background: 'red',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: 'black',
        },
      },
    },
  },
};

const App = () => {
  return (
    <Admin theme={myTheme} loginPage={LoginPage} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />
      <Resource name='posts' list={UserList} show={UserShow} edit={UserEdit} />
    </Admin>
  );
};

export default App;
