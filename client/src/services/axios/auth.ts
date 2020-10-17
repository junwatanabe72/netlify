import { client } from '../../utils/axiosConf';

//signup
export async function createUserAxios(arg: SignupUserType) {
  const queries = { user: arg };
  const { data } = await client.post('/auth/signup', queries);
  return data;
}

//login
export async function loginUserAxios(arg: LoginUserType) {
  const queries = arg;
  const { data } = await client.post('/auth/login', queries);
  return data;
}

export async function checkLoginUserAxios() {
  const { data } = await client.get('/auth/login');
  return data;
}
