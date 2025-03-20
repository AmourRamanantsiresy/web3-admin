import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { AppBar, Layout } from 'react-admin';
import { MyMenu } from './CustomMenu';

const Appbar = () => <AppBar />;

export const MyLayout = ({ children }) => {
  return (
    <Layout

      sx={{
        color: "blue",
        '& .my-app-bar': {
          bgcolor: {
            xs: 'red',
            sm: 'black',
            md: 'yellow',
            xl: 'green',
          },
        },
      }}
      menu={MyMenu}
      appBar={Appbar}
    >
      <Typography>Application</Typography>
      {children}
    </Layout>
  );
};
