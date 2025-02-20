import {
    CreateParams,
    CreateResult,
    DataProvider,
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetListParams,
    GetListResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    Identifier,
    QueryFunctionContext,
    RaRecord,
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
} from 'react-admin';
import { postDataProvider } from './provider/post-data-provider';
import { userDataProvider } from './provider/user-data-provider';

const getDataProvider = (resource: string) => {
  switch (resource) {
    case 'users':
      return userDataProvider;
    case 'posts':
      return postDataProvider;
    default:
      throw new Error('No data provider');
  }
};

export const dataProvider: DataProvider = {
  getList: async function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetListParams & QueryFunctionContext
  ): Promise<GetListResult<RecordType>> {
    const currentDataProvider = getDataProvider(resource)
    return currentDataProvider.getList(params)
  },
  getOne: async function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetOneParams<RecordType> & QueryFunctionContext
  ): Promise<GetOneResult<RecordType>> {
    const currentDataProvider = getDataProvider(resource)
    return currentDataProvider.getOne(params)
  },
  update: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
    const currentDataProvider = getDataProvider(resource)
    return currentDataProvider.update(params)
  },
  getMany: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyParams<RecordType> & QueryFunctionContext
  ): Promise<GetManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getManyReference: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyReferenceParams & QueryFunctionContext
  ): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  create: function <RecordType extends Omit<RaRecord, 'id'> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier }>(
    resource: string,
    params: CreateParams
  ): Promise<CreateResult<ResultRecordType>> {
    throw new Error('Function not implemented.');
  },
  delete: function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
};
