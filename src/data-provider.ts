import {
    CreateParams,
    CreateResult,
    DataProvider, GetListParams,
    GetListResult, GetOneParams,
    GetOneResult,
    Identifier,
    QueryFunctionContext,
    RaRecord
} from 'react-admin';


export const dataProvider: DataProvider = {
  getList: async function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetListParams & QueryFunctionContext
  ): Promise<GetListResult<RecordType>> {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' });

    const { pagination } = params;

    const { page = 1, perPage = 10 } = pagination || {};

    const offset = (page - 1) * perPage;

    const posts = await data.json();
    const pageNumber = posts.length / perPage;

    const result: GetListResult = {
      data: posts.slice(offset, offset + perPage),
      total: posts.length,
      pageInfo: {
        hasNextPage: page < pageNumber,
        hasPreviousPage: page !== 1,
      },
    };

    return result;
  },
  getOne: async function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetOneParams<RecordType> & QueryFunctionContext
  ): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' });

    const result: GetOneResult = {
      data: await data.json(),
    };

    return result;
  },
  create: async function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier }>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<ResultRecordType>> {
    const { data } = params;
    const createdPost = await fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'POST', body: JSON.stringify(data) });

    const result: CreateResult = {
      data: await createdPost.json(),
    };

    return result;
  },
};
