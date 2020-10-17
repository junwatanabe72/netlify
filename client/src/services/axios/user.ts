import { client } from '../../utils/axiosConf';

//userAPI

export async function updateUserAxios(arg: PartialUserType) {
  const { id } = arg;
  const queries = { user: arg };
  const { data } = await client.patch(`/users/${id}`, queries);
  return data;
}
export async function updateUserImageAxios(arg: FormData) {
  const id = arg.get('id');
  const queries = arg;
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  const { data } = await client.post(`/users/${id}/images`, queries, config);
  return data;
}

//users
export async function getUsersAxios() {
  const { data } = await client.get('/users');
  return data;
}
