import { client } from '../../utils/axiosConf';

export async function getShaftsAxios() {
  const { data } = await client.get('/shafts');
  return data;
}
