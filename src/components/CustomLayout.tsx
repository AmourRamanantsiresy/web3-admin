import { AppBar, Layout } from 'react-admin';
import { MyMenu } from './CustomMenu';

const Appbar = () => <AppBar />;

export const MyLayout = ({ children }) => {
  return (
    <Layout menu={MyMenu} appBar={Appbar}>
      {children}
    </Layout>
  );
};
