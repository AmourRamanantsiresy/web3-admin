import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='username' />
        <TextField source='address.street' />
        <TextField source='address.geo.lat' />
        <TextField label='Address longitude' source='address.geo.lng' />
      </SimpleShowLayout>
    </Show>
  );
};
