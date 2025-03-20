import { Button, Card, CardActions, CardContent, CardHeader, Container, createTheme, TextField } from '@mui/material';
import { Admin, CustomRoutes, Resource, useTranslate } from 'react-admin';
import { Route, useNavigate } from 'react-router-dom';
import { MyLayout } from './components/CustomLayout';
import { dataProvider } from './data-provider';
import { authProvider } from './provider/auth-provider-2';
import { i18nProvider } from './provider/i18n-provider';
import { LoginPage } from './screen/LoginPage';
import { UserEdit } from './screen/UserEdit';
import { UserList } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const SignUp = () => {
  const navigate = useNavigate();
  const signUp = async () => {
    const result = await authProvider.signup('', '');
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
  typography: {
    allVariants: {
      fontStyle: 'italic',
    },
  },
  components: {},
});

const App = () => {
  return (
    <Admin theme={theme} loginPage={LoginPage} i18nProvider={i18nProvider} layout={MyLayout} dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />
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
