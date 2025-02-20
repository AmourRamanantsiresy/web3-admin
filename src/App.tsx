import { Admin, DataProvider } from 'react-admin';
import { dataProvider } from './data-provider';

const App = () => {
  return <Admin dataProvider={dataProvider as unknown as DataProvider}></Admin>;
};

export default App;
