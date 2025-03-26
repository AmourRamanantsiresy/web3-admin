import { Button, Create, Edit, NumberInput, SaveButton, ShowButton, SimpleForm, TextInput, Toolbar, TopToolbar } from 'react-admin';

const CustomToolbar = () => (
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <SaveButton />
    <Button label='Shutdown' />
    <Button label='Shutdown Force' />
  </Toolbar>
);

const UserEditActions = () => (
  <TopToolbar>
    <ShowButton />
    <Button label='Shutdown' />
    <Button label='Shutdown Force' />
  </TopToolbar>
);

export const UserEdit = () => (
  <Edit actions={<UserEditActions />}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' />
      <TextInput source='username' />
      <NumberInput source='address.geo.lat' />
      <NumberInput source='address.geo.lng' />
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' />
      <TextInput source='username' />
      <NumberInput source='address.geo.lat' />
      <NumberInput source='address.geo.lng' />
    </SimpleForm>
  </Create>
);
