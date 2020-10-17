import { client } from '../../utils/axiosConf';

export async function getClubsAxios(arg: PartialUserType) {
  const { id } = arg;
  const { data } = await client.get(`/users/${id}/clubs`);
  return data;
}

export async function updateClubsAxios(arg: PartialArrayClubType) {
  const { userId } = arg[0];
  const queries = { club: [...arg] };
  const { data } = await client.post(`/users/${userId}/clubs/replace`, queries);
  return data;
}
