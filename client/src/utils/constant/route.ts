export const ROUTE = {
  TOP: '/',
  USERS: '/users',
  LOGIN: '/login',
  SIGNUP: '/signup',
} as const;

export const INFOROUTE = {
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TOS: '/tos',
} as const;

export const routeLabel = {
  TOP: 'トップ',
  USERS: '一覧',
  LOGIN: 'ログイン',
  SIGNUP: '登録',
  CONTACT: '問合せ',
  ABOUT: 'このサイトについて',
  PRIVACY: 'プライバシーポリシー',
  TOS: '利用規約',
  USER: `プロフィール`,
  EDIT: `編集`,
  LOGOUT: 'ログアウト',
};
