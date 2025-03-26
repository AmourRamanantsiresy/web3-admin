import { Create } from '@mui/icons-material';
import { Box, Button, Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Datagrid, List, SearchInput, TextField, TextInput, Toolbar, useRedirect } from 'react-admin';

const CToolbar = () => {
  const redirect = useRedirect();

  const create = () => {
    redirect('create', 'users');
  };

  return (
    <Toolbar>
      <Button variant='contained' onClick={create} startIcon={<Create />}>
        Create
      </Button>
    </Toolbar>
  );
};

const postFilters = [<SearchInput key={1} source='q' alwaysOn />, <TextInput key={2} label='Title' source='title' defaultValue='Hello, World!' />];

export const UserList = () => {
  return (
    <List actions={<CToolbar />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source='id' />
        <TextField source='name' />
        <TextField source='username' />
        <TextField source='address.street' />
        <TextField source='address.geo.lat' />
        <Stack direction='row' gap={2}>
          <Button>this</Button>
          <Button variant='contained'>this</Button>
        </Stack>
      </Datagrid>
    </List>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const UserListTab = () => {
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(_, value) => {
          setTab(value);
        }}
        aria-label='basic tabs example'
      >
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
      </Tabs>
      <List
        sx={{
          '& .MuiTableRow-root': {
            height: "5rem"
          },
        }}
        filter={{ index: tab }}
        actions={<CToolbar />}
      >
        <Datagrid bulkActionButtons={false}>
          <TextField source='id' />
          <TextField source='name' />
          <TextField source='username' />
          <TextField source='address.street' />
          <TextField source='address.geo.lat' />
          <Stack direction='row' gap={2}>
            <Button>this</Button>
            <Button variant='contained'>this</Button>
          </Stack>
        </Datagrid>
      </List>
    </Box>
  );
};
