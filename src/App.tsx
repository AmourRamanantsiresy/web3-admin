import { Button, Card, CardActions, CardContent, CardHeader, Container, createTheme, TextField } from '@mui/material';
import { Admin, CustomRoutes, Resource, useTranslate } from 'react-admin';
import { Route, useNavigate } from 'react-router-dom';
import { MyLayout } from './components/CustomLayout';
import { dataProvider } from './data-provider';
import { authProvider } from './provider/auth-provider-2';
import { i18nProvider } from './provider/i18n-provider';
import { LoginPage } from './screen/LoginPage';
import { UserCreate, UserEdit } from './screen/UserEdit';
import { UserList, UserListTab } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const SignUp = () => {
  const navigate = useNavigate();
  const signUp = async () => {
    const result = await authProvider.signUp('', '');
    navigate(result);
  };

  return (
    <Container>
      <Card>
        <CardHeader title='Sign Up' />
        <CardContent component='form' onSubmit={signUp}>
          <TextField type='username' />
          <TextField type='password' />
        </CardContent>
        <CardActions>
          <Button onClick={signUp}>Sign Up</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
const Mangahazo = () => {
  const translate = useTranslate();

  return (
    <div>
      <h1>Mangahazo</h1>
      <p>{translate('resources.users.fields.age')}</p>
      <p>{translate('resources.name')}</p>
    </div>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      dark: '#000',
      light: '#000',
    },
    secondary: {
      main: '#000',
      dark: '#000',
      light: '#000',
    },
  },
  typography: {
    allVariants: {
      fontStyle: 'italic',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

const App = () => {
  return (
    <Admin theme={theme} loginPage={LoginPage} i18nProvider={i18nProvider} layout={MyLayout} dataProvider={dataProvider}>
      <Resource name='users' list={UserListTab} show={UserShow} edit={UserEdit} create={UserCreate} />
      <Resource name='posts' list={UserList} show={UserShow} edit={UserEdit} />
      <CustomRoutes noLayout>
        <Route path='/signup' element={<SignUp />} />
      </CustomRoutes>
      <CustomRoutes>
        <Route path='/mangahazo' element={<Mangahazo />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
