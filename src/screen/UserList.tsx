import { Button } from '@mui/material';
import { Datagrid, List, TextField } from 'react-admin';

export const UserList = () => {
  return (
    <List >
      <Datagrid>
        <Button>this</Button>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='username' />
        <TextField source='address.street' />
        <TextField source='address.geo.lat' />
      </Datagrid>
    </List>
  );
};
