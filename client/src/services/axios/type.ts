import { client } from '../../utils/axiosConf';

export async function getTypesAxios() {
  const { data } = await client.get('/types');
  return data;
}
