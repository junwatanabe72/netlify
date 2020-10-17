import { client } from '../../utils/axiosConf';

export async function getVideosAxios(arg: PartialUserType) {
  const { id } = arg;
  const { data } = await client.get(`/users/${id}/videos`);
  return data;
}

export async function updateVideosAxios(arg: PartialArrayVideoType) {
  const { userId } = arg[0];
  const queries = { video: [...arg] };
  const { data } = await client.post(`/users/${userId}/videos/replace`, queries);
  return data;
}
