import { client } from '../../utils/axiosConf';

export async function getResultsAxios(arg: PartialUserType) {
  const { id } = arg;
  const { data } = await client.get(`/users/${id}/results`);
  return data;
}

export async function updateResultsAxios(arg: PartialArrayResultType) {
  const { userId } = arg[0];
  const queries = { result: [...arg] };
  const { data } = await client.post(`/users/${userId}/results/replace`, queries);
  return data;
}
