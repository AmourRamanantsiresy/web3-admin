import { Admin, Resource } from 'react-admin';
import { dataProvider } from './data-provider';
import { UserEdit } from './screen/UserEdit';
import { UserList } from './screen/UserList';
import { UserShow } from './screen/UserShow';

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} show={UserShow} edit={UserEdit} />
      <Resource name='posts' list={UserList} show={UserShow} edit={UserEdit} />
    </Admin>
  );
};

export default App;
