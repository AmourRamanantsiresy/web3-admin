import { GetListParams, GetListResult, GetOneParams, GetOneResult, QueryFunctionContext, RaRecord, UpdateParams, UpdateResult } from 'react-admin';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const postDataProvider = {
  getList: async function <RecordType extends RaRecord = any>(params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
    const data = await fetch(url, { method: 'GET' });
    const userList = await data.json();

    return {
      data: userList,
      total: 10,
    };
  },
  getOne: async function <RecordType extends RaRecord = any>(params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const data = await fetch(`${url}/${id}`, { method: 'GET' });
    const user = await data.json();

    return {
      data: user,
    };
  },
  update: async function <RecordType extends RaRecord = any>(params: UpdateParams): Promise<UpdateResult<RecordType>> {
    const { data: editedUser, id } = params;
    const data = await fetch(`${url}/${id}`, { method: 'PUT', body: JSON.stringify(editedUser) });
    const user = await data.json();
    return {
      data: user,
    };
  },
};
