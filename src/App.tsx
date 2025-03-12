import { Button } from '@mui/material';
import { Admin, CustomRoutes, Resource, useCanAccess } from 'react-admin';
import { Route } from 'react-router-dom';
import { dataProvider } from './data-provider';
import { authProvider } from './provider/auth-provider';
import { i18nProvider } from './provider/i18n-provider';
import { MyLayout } from './screen/Layout';
import { UserEdit } from './screen/UserEdit';
import { UserList } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const Mangahazo = () => {
  const { canAccess } = useCanAccess({ action: 'edit', resource: 'posts' });

  return (
    <div>
      <h1>mangahazo</h1>
      <Button disabled={!canAccess}>Value</Button>
    </div>
  );
};

const App = () => {
  return (
    <Admin authProvider={authProvider} i18nProvider={i18nProvider} layout={MyLayout} dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />
      <Resource name='posts' list={UserList} show={UserShow} edit={UserEdit} />
      <CustomRoutes>
        <Route path='mangahazo' element={<Mangahazo />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
