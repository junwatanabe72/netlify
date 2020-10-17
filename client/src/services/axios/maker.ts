import { client } from '../../utils/axiosConf';

export async function getMakersAxios() {
  const { data } = await client.get('/makers');
  return data;
}
