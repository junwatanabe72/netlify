type ROUTETYPE = typeof ROUTE.TOP | typeof ROUTE.USERS | typeof ROUTE.LOGIN | typeof ROUTE.SIGNUP;

type INFOROUTETYPE =
  | typeof INFOROUTE.CONTACT
  | typeof INFOROUTE.ABOUT
  | typeof INFOROUTE.PRIVACY
  | typeof INFOROUTE.TOS;

const ROUTE = {
  TOP: '/',
  USERS: '/users',
  LOGIN: '/login',
  SIGNUP: '/signup',
} as const;

const INFOROUTE = {
  CONTACT: '/contact',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TOS: '/tos',
} as const;

const routeLabel = {
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

type RouteLabel = typeof routeLabel;
