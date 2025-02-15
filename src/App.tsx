import {
  Admin,
  BooleanInput,
  Create,
  Datagrid,
  List,
  NumberInput,
  Resource,
  RichTextField,
  Show,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';
import { dataProvider } from './data-provider';

export const PostList = () => (
  <List>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
    </Datagrid>
  </List>
);

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='title' />
      <RichTextField source='body' />
    </SimpleShowLayout>
  </Show>
);

const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='title' />
      <TextInput source='body' multiline={true} label='Short body' />
      <BooleanInput source='bool' label='Short body' />
      <NumberInput source='bool' label='Short body' />
    </SimpleForm>
  </Create>
);

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='posts' list={PostList} show={PostShow} create={PostCreate} />
    </Admin>
  );
};

export default App;
