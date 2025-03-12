import { Layout } from 'react-admin';
import { MyMenu } from './Menu';

export const MyLayout = ({ children }) => {
  return <Layout menu={MyMenu}>{children}</Layout>;
};
