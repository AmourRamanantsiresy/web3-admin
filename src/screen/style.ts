import { SxProps } from '@mui/material';

export const UserListStyle: SxProps = {};

export const LoginStyle: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& form': {
    display: 'flex',
    flexDirection: 'column',
  },
  '& button[type="submit"]': {
    background: 'green',
  },
  '& .MuiPaper-root': {
    background: 'yellow',
  },
};
