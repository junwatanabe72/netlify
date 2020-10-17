const facebook = 'junwatanabe72';
const twitter = 'junwata72';
const instagram = 'ruby.on';
const youtube = 'UC-hTmh_CtqIUphbwd8Eu6EQ';

export const sexValues = Object.freeze({
  male: 1,
  female: 100,
});

export const sexLabels = {
  male: '男性',
  female: '女性',
};

export const showValues = Object.freeze({
  open: 1,
  close: 100,
});

export const showLabels = {
  open: '公開',
  close: '非公開',
};
export const classValues = Object.freeze({
  pro: 1,
  ama: 100,
});

export const classLabels = {
  pro: 'プロフェッショナル',
  ama: 'アマチュア',
};

export const bloodValues = Object.freeze({
  A: 1,
  B: 2,
  O: 3,
  AB: 4,
});

export const bloodLabels = {
  A: 'A',
  B: 'B',
  O: 'O',
  AB: 'AB',
};
export const historyValues = Object.freeze({
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
});

export const historyLabels = {
  A: '-',
  B: '〜1年',
  C: '2年〜5年',
  D: '6年〜10年',
  E: '10年〜15年',
  F: '15年〜20年',
  G: '20年〜',
};

const ImageURL =
  'https://res.cloudinary.com/hqejvhqad/image/upload/v1566349931/edh9uyqxlz8xx6zyz60z.jpg';

const URL =
  'https://avatars1.githubusercontent.com/u/50585862?s=460&u=64c7812edd7b65bdbe3e3fc57e6ac8a383a418af&v=4';

const userName = 'JUNWATANABE72';

export const clubOrder = [
  '1WOOD',
  '3WOOD',
  '4WOOD',
  '5WOOD',
  '7WOOD',
  '9WOOD',
  '11WOOD',
  '13WOOD',
  '3UT',
  '4UT',
  '5UT',
  '6UT',
  '2IRON',
  '3IRON',
  '4IRON',
  'IRON(2~9)',
  'IRON(2~P)',
  'IRON(3~P)',
  'IRON(4~P)',
  'IRON(5~P)',
  'IRON(6~P)',
  'IRON(3~9)',
  'IRON(4~9)',
  'IRON(5~9)',
  'PW',
  'AW(50 Degree)',
  'AW(52 Degree)',
  'SW(54 Degree)',
  'SW(56 Degree)',
  'SW(58 Degree)',
  'LW(60 Degree)',
  'PUTTER',
];
export const initialUser = {
  id: 1,
  name: userName,
  profileImage: URL,
  facebook: facebook,
  twitter: twitter,
  instagram: instagram,
  youtube: youtube,
  sex: 1,
  residence: '兵庫県',
  birthPlace: '栃木県',
  school: '学習院大学',
  hobby: 'プログラミング',
  bestScore: 69,
  averageDistance: 250,
  homeCourse: '姉ヶ崎CC',
  email: 'junwatanabe72@gmail.com',
  password: 'Password',
  job: 'free',
  clubImage: ImageURL,
  show: 100,
  typeId: '1WOOD',
  favourite: 'タイガーウッズ',
  blood: 1,
  history: 1,
  hcap: 5,
  classification: 100,
};
export const prefacture = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];
export const baseUser = {
  id: '',
  name: '',
  profileImage: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  sex: '',
  residence: '',
  birthPlace: '',
  school: '',
  hobby: '',
  bestScore: '',
  averageDistance: '',
  homeCourse: '',
  email: '',
  password: '',
  job: '',
  clubImage: '',
  show: '',
};
