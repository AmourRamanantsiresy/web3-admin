import { ShoppingBag } from '@mui/icons-material';
import { Menu } from 'react-admin';

export const MyMenu = () => (
  <Menu>
    <Menu.ResourceItem name='posts' />
    <Menu.ResourceItem name='users' />
    <Menu.Item to='/mangahazo' primaryText='Mangahazo' leftIcon={<ShoppingBag />} />
  </Menu>
);
