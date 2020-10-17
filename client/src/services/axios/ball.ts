import { client } from '../../utils/axiosConf';

export async function getBallAxios(arg: PartialUserType) {
  const { id } = arg;
  const { data } = await client.get(`/users/${id}/ball`);
  return data;
}

export async function updateBallAxios(arg: BallType) {
  const { userId } = arg;
  const queries = { ball: arg };
  const { data } = await client.patch(`/users/${userId}/ball`, queries);
  return data;
}
