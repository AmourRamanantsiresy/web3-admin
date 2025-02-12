import {
  Admin,
  Datagrid,
  DataProvider,
  GetListParams,
  GetListResult,
  List,
  QueryFunctionContext,
  Resource,
  TextField
} from 'react-admin';

const dataProvider: DataProvider = {
  getList: async function (resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
    const result = {
      data: [
        { id: 126, title: 'allo?', author_id: 12 },
        { id: 127, title: 'bien le bonjour', author_id: 12 },
        { id: 124, title: 'good day sunshine', author_id: 12 },
        { id: 123, title: 'hello, world', author_id: 12 },
        { id: 125, title: 'howdy partner', author_id: 12 },
      ],
      total: 27,
      meta: {
        facets: [
          { name: 'published', count: 12 },
          { name: 'draft', count: 15 },
        ],
      },
    };

    return Promise.resolve(result);
  },
};

const PostList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='author_id' />
      </Datagrid>
    </List>
  );
};

const App = () => {
  return (
    <div>
      <Admin dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} />
        <Resource name='User' list={List} />
        <Resource name='Cours' list={List} />
      </Admin>
    </div>
  );
};

export default App;
